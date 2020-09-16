import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

const Atlas = ({ handler, viewport, year }) => {
  const mapRef = useRef(null);
  useEffect(() => {
    const map = mapRef.current.getMap();
    let style = null;
    try {
      style = map.getStyle();
    } catch (err) {
      style = null;
    } finally {
      if (style) {
        style.layers = style.layers.map(layer => {
          if (layer.source === 'composite') {
            const filter =
              layer.filter && layer.filter[1][0] === 'match' ? layer.filter.slice(0, 2) : ['all'];
            return {
              ...layer,
              filter: [
                ...filter,
                ['<=', ['get', 'firstyear'], year],
                ['>=', ['get', 'lastyear'], year],
              ],
            };
          }
          return layer;
        });
        map.setStyle(style);
      }
    }
  }, [year]);

  return (
    <ReactMapGL
      ref={mapRef}
      mapboxApiAccessToken="pk.eyJ1IjoiYXhpc21hcHMiLCJhIjoieUlmVFRmRSJ9.CpIxovz1TUWe_ecNLFuHNg"
      mapStyle="/style.json"
      width="100%"
      height="100%"
      {...viewport}
      onViewportChange={nextViewport => handler(nextViewport)}
    />
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
  year: PropTypes.number.isRequired,
};

export default Atlas;
