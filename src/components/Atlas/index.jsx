/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Layer, LinearInterpolator, NavigationControl, Source } from 'react-map-gl';
import { Card, Icon } from 'semantic-ui-react';
import { Editor } from 'react-map-gl-draw';
import axios from 'axios';

import useSWR from 'swr';
import { useDraw } from '../../providers/DrawProvider';
import Toolbar from '../Toolbar';

import { maxZoom, minZoom } from '../../config/map';
import styles from './Atlas.module.css';
import { hpi, makeChoropleth } from './utils';

const labelLayout = {
  'text-font': ['Lato Regular'],
  'text-field': ['get', 'title'],
};

const fetcher = indicator =>
  axios
    .get(
      `${process.env.NEXT_PUBLIC_API}hpi?geography=${indicator.geography}&year=${indicator.year}&indicator=${indicator.varname}&format=json&key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    .then(res => res.data);

const Atlas = ({
  handler,
  viewport,
  viewer,
  selectedFeature,
  annotations,
  indicator,
  geography,
}) => {
  const mapRef = useRef(null);
  const { data: choroplethData } = useSWR(indicator, fetcher);

  let drawProps = [];
  if (!viewer) [drawProps] = useDraw();
  const [mapViewport, setMapViewport] = useState(viewport);
  const [featureData, setFeatureData] = useState(null);
  const [is2D, setIs2D] = useState(true);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (viewport.latitude && viewport.longitude && viewport.zoom) {
      setMapViewport(viewport);
    }
  }, [viewport]);

  useEffect(() => {
    setFeatureData(null);
  }, [selectedFeature]);

  const onViewportChange = nextViewport => {
    if (viewport.latitude && viewport.longitude && viewport.zoom) {
      setMapViewport(nextViewport);
      handler(nextViewport);
    }
  };

  const onMapLoad = () => {
    onViewportChange(viewport);
  };

  const getMapProps = () => {
    let props = {
      ref: mapRef,
      mapboxApiAccessToken: 'pk.eyJ1IjoiYXhpc21hcHMiLCJhIjoieUlmVFRmRSJ9.CpIxovz1TUWe_ecNLFuHNg',
      mapStyle: '/style/style.json',
      width: '100%',
      height: '100%',
      onLoad: onMapLoad,
      minZoom,
      maxZoom,
    };
    if (viewer) {
      props = {
        ...props,
        ...mapViewport,
        scrollZoom: false,
        onViewportChange,
      };
    } else {
      props = {
        ...props,
        ...viewport,
      };
      if (!locked) {
        props.onViewportChange = handler;
      }
    }
    return props;
  };

  return (
    <ReactMapGL {...getMapProps()}>
      {drawProps.editing && <Editor {...drawProps} />}
      {!viewer && <Toolbar />}
      {geography && (
        <Source
          key={geography}
          type="vector"
          tiles={[`${process.env.NEXT_PUBLIC_TILE_URL}${geography}/{z}/{x}/{y}.pbf`]}
        >
          {choroplethData && (
            <Layer
              id="choropleth"
              type="fill"
              beforeId="border"
              source-layer={geography}
              paint={{ 'fill-color': makeChoropleth(choroplethData) }}
            />
          )}
          <Layer
            id="border"
            type="line"
            source-layer={geography}
            beforeId="hillshade"
            paint={{
              'line-width': ['interpolate', ['linear'], ['zoom'], 6, 0.1, 10, 1],
              'line-opacity': ['interpolate', ['linear'], ['zoom'], 4, 0, 6, 1],
              'line-color': '#666666',
            }}
          />
        </Source>
      )}
      {featureData && (
        <Source key={selectedFeature} type="geojson" data={featureData}>
          {featureData.geometry.type.match(/point/i) ? (
            <Layer id="selected-point" type="circle" paint={{ 'circle-radius': 6 }} />
          ) : (
            <>
              <Layer
                id="selected-case"
                type="line"
                paint={{ 'line-width': 6, 'line-color': '#eeeeee' }}
                // beforeId={activeBasemap ? 'overlay' : 'expressway-label'}
              />
              <Layer
                id="selected-line"
                type="line"
                paint={{ 'line-width': 3, 'line-color': '#000000' }}
                // beforeId={activeBasemap ? 'overlay' : 'expressway-label'}
              />
            </>
          )}
        </Source>
      )}
      {!drawProps.editing && annotations && (
        <Source type="geojson" data={annotations}>
          <Layer
            id="annotation-polygon"
            type="fill"
            filter={['==', '$type', 'Polygon']}
            paint={{ 'fill-opacity': 0.25 }}
          />
          <Layer
            id="annotation-line"
            type="line"
            filter={['any', ['==', '$type', 'LineString'], ['==', '$type', 'Polygon']]}
          />
          <Layer id="annotation-point" type="circle" filter={['==', '$type', 'Point']} />
          <Layer
            id="annotation-polygon-label"
            type="symbol"
            filter={['==', '$type', 'Polygon']}
            layout={{ ...labelLayout, 'symbol-placement': 'point' }}
            paint={{ 'text-halo-width': 3, 'text-halo-color': '#FFFFFF' }}
          />
          <Layer
            id="annotation-line-label"
            type="symbol"
            filter={['==', '$type', 'LineString']}
            layout={{ ...labelLayout, 'symbol-placement': 'line' }}
            paint={{ 'text-halo-width': 3, 'text-halo-color': '#FFFFFF' }}
          />
          <Layer
            id="annotation-point-label"
            type="symbol"
            filter={['==', '$type', 'Point']}
            layout={{
              ...labelLayout,
              'text-variable-anchor': ['bottom-left', 'top-left', 'bottom-right', 'top-right'],
            }}
            paint={{ 'text-halo-width': 3, 'text-halo-color': '#FFFFFF' }}
          />
        </Source>
      )}
      {!viewer && (
        <div style={{ position: 'absolute', left: 15, top: 60 }}>
          <NavigationControl showCompass={false} />
          <div
            className={`${styles.button} ${styles.button2D}`}
            role="button"
            tabIndex={-1}
            onClick={() => {
              const pitch = is2D ? 60 : 0;
              setIs2D(!is2D);
              onViewportChange({
                ...viewport,
                pitch,
                transitionInterpolator: new LinearInterpolator(['pitch']),
                transitionDuration: 500,
              });
            }}
          >
            {is2D ? '3D' : '2D'}
          </div>
          <div
            className={`${styles.button} ${styles.buttonLock}`}
            role="button"
            tabIndex={-1}
            onClick={() => setLocked(!locked)}
          >
            {locked ? <Icon name="lock" /> : <Icon name="lock open" />}
          </div>
        </div>
      )}
      {indicator && (
        <Card raised className={styles.legend}>
          <Card.Content>
            <Card.Header>{indicator.title}</Card.Header>
            <Card.Meta>Less → More healthy community conditions</Card.Meta>
            <Card.Description style={{ paddingBottom: 5 }}>
              {hpi.map((color, i) => (
                <div key={color} className={styles.legendItem} style={{ backgroundColor: color }}>
                  <div className={styles.legendLabel}>{(i * 25).toString()}</div>
                </div>
              ))}
              <div className={styles.legendItem}>
                <div className={styles.legendLabel}>100</div>
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      )}
    </ReactMapGL>
  );
};

Atlas.propTypes = {
  handler: PropTypes.func.isRequired,
  viewport: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    zoom: PropTypes.number,
    bearing: PropTypes.number,
    pitch: PropTypes.number,
  }).isRequired,
  viewer: PropTypes.bool,
  selectedFeature: PropTypes.string,
  annotations: PropTypes.shape(),
  indicator: PropTypes.shape({
    title: PropTypes.string,
    varname: PropTypes.string,
    year: PropTypes.number,
    source: PropTypes.string,
    url: PropTypes.string,
    geography: PropTypes.string,
  }),
  geography: PropTypes.string,
};

Atlas.defaultProps = {
  viewer: false,
  selectedFeature: null,
  annotations: null,
  indicator: null,
  geography: null,
};

export default Atlas;
