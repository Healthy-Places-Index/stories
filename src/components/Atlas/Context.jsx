import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation, useQuery } from '@apollo/client';
import { isEqual, pick } from 'lodash';
import { Dimmer, Loader } from 'semantic-ui-react';

import Atlas from './index';
import { maxLat, maxLon, maxZoom, minLat, minLon, minZoom } from '../../config/map';
import debouncedMutation from '../../providers/debouncedMutation';
import useLocale from '../../hooks/useLocale';

const GET_SLIDE_ATLAS = gql`
  query GetSlideYear($slide: ID!) {
    Slide(where: { id: $slide }) {
      id
      longitude
      latitude
      zoom
      bearing
      pitch
      selectedFeature
      indicator {
        varname
        year
      }
      geography {
        layer
      }
      annotations {
        id
        feature
      }
    }
  }
`;

const UPDATE_VIEWPORT = gql`
  mutation UpdateViewport(
    $slide: ID!
    $longitude: Float
    $latitude: Float
    $zoom: Float
    $bearing: Float
    $pitch: Float
  ) {
    updateSlide(
      id: $slide
      data: {
        longitude: $longitude
        latitude: $latitude
        zoom: $zoom
        bearing: $bearing
        pitch: $pitch
      }
    ) {
      id
      longitude
      latitude
      zoom
      bearing
      pitch
    }
  }
`;

const AtlasContext = ({ slide }) => {
  const { loading, error, data } = useQuery(GET_SLIDE_ATLAS, {
    variables: { slide },
  });

  const [onUpdateViewport] = useMutation(UPDATE_VIEWPORT);
  const viewportTimer = useRef();
  const { loadingText } = useLocale();

  const [mapViewport, setMapViewport] = useState(null);
  const [annotations, setAnnotations] = useState(null);

  useEffect(() => {
    if (data) {
      setMapViewport(pick(data.Slide, ['longitude', 'latitude', 'zoom', 'bearing', 'pitch']));
      if (data.Slide.annotations) {
        setAnnotations({
          type: 'FeatureCollection',
          features: data.Slide.annotations.map(({ feature }) => JSON.parse(feature)),
        });
      }
    }
  }, [loading, data]);

  const onViewportChange = nextViewport => {
    if (nextViewport) {
      const clampedPort = {
        ...nextViewport,
        longitude: Math.max(minLon, Math.min(maxLon, nextViewport.longitude)),
        latitude: Math.max(minLat, Math.min(maxLat, nextViewport.latitude)),
        zoom: Math.max(minZoom, Math.min(maxZoom, nextViewport.zoom)),
      };
      setMapViewport(clampedPort);
      if (
        !isEqual(
          clampedPort,
          pick(data.Slide, ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'])
        )
      ) {
        viewportTimer.current = debouncedMutation({
          slide,
          timerRef: viewportTimer,
          mutation: onUpdateViewport,
          values: clampedPort,
        });
      }
    }
  };

  if (loading || !mapViewport || !data)
    return (
      <Dimmer active>
        <Loader size="huge">{loadingText}</Loader>
      </Dimmer>
    );
  if (error) return <p>Error :(</p>;

  return (
    <Atlas
      handler={onViewportChange}
      viewport={mapViewport}
      disabledLayers={data.Slide.disabledLayers}
      activeBasemap={data.Slide.basemap}
      selectedFeature={data.Slide.selectedFeature}
      opacity={data.Slide.opacity}
      annotations={annotations}
      indicator={data.Slide.indicator.varname}
      year={data.Slide.indicator.year}
      geography={data.Slide.geography.layer}
    />
  );
};

AtlasContext.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default AtlasContext;
