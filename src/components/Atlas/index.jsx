/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  Source,
  Layer,
  NavigationControl,
  AttributionControl,
  LinearInterpolator,
} from 'react-map-gl';
import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import { Editor } from 'react-map-gl-draw';

import { useDraw } from '../../providers/DrawProvider';
import Toolbar from '../Toolbar';

import { minZoom, maxZoom } from '../../config/map';
import styles from './Atlas.module.css';

const labelLayout = {
  'text-font': ['Lato Regular'],
  'text-field': ['get', 'title'],
};

const Atlas = ({ handler, viewport, viewer, selectedFeature, annotations }) => {
  const mapRef = useRef(null);

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
        <div style={{ position: 'absolute', left: 15, top: 100 }}>
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
};

Atlas.defaultProps = {
  viewer: false,
  selectedFeature: null,
  annotations: null,
};

export default Atlas;
