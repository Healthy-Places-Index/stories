import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation, useQuery } from '@apollo/client';
import { omit, uniqBy } from 'lodash';
import { Form } from 'semantic-ui-react';

import styles from './Chooser.module.css';

const GET_SLIDE = gql`
  query GetSlideIndicator($slide: ID!) {
    Slide(where: { id: $slide }) {
      id
      indicator {
        id
      }
      geography {
        id
      }
    }
  }
`;

const GET_INDICATORS = gql`
  query GetAllIndicators {
    indicators: allIndicators(orderBy: "year_DESC") {
      id
      varname
      title
      year
      geographies(orderBy: "ordering_ASC") {
        id
        layer
        title
        ordering
      }
    }
  }
`;

const UPDATE_SLIDE = gql`
  mutation UpdateSlideIndicator(
    $slide: ID!
    $indicator: IndicatorRelateToOneInput
    $geography: GeographyRelateToOneInput
  ) {
    updateSlide(id: $slide, data: { indicator: $indicator, geography: $geography }) {
      id
      indicator {
        id
      }
      geography {
        id
      }
    }
  }
`;

const Chooser = ({ slide }) => {
  const { data } = useQuery(GET_SLIDE, {
    variables: { slide },
  });
  const allIndicators = useQuery(GET_INDICATORS);
  const [updateSlide] = useMutation(UPDATE_SLIDE);

  const [indicator, setIndicator] = useState(null);
  const [geography, setGeography] = useState(null);
  const [indicators, setIndicators] = useState([]);
  const [years, setYears] = useState([]);
  const [geographies, setGeographies] = useState([]);

  const onIndicatorChange = (indicatorId, geographyId) => {
    if (indicatorId && geographyId) {
      updateSlide({
        variables: {
          slide,
          indicator: {
            connect: { id: indicatorId },
          },
          geography: {
            connect: { id: geographyId },
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateSlide: {
            __typename: 'Slide',
            id: slide,
            indicator: {
              __typename: 'Indicator',
              id: indicatorId,
            },
            geography: {
              __typename: 'Geography',
              id: geographyId,
            },
          },
        },
      });
    } else {
      updateSlide({
        variables: {
          slide,
          indicator: {
            disconnectAll: true,
          },
          geography: {
            disconnectAll: true,
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateSlide: {
            __typename: 'Slide',
            id: slide,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (allIndicators.data?.indicators) {
      setIndicators([
        { key: '', value: null, text: 'None' },
        ...uniqBy(allIndicators.data?.indicators, 'varname')
          .map(i => ({
            key: i.id,
            value: i.id,
            text: i.title,
            varname: i.varname,
          }))
          .sort((a, b) => a.text.localeCompare(b.text))
          .map(i => {
            if (indicator && i.varname === indicator.varname) {
              return {
                key: indicator.id,
                value: indicator.id,
                text: indicator.title,
              };
            }
            return omit(i, 'varname');
          }),
      ]);
    }
  }, [allIndicators.data?.indicators, indicator]);

  useEffect(() => {
    if (data?.Slide?.indicator && allIndicators.data?.indicators) {
      setIndicator(allIndicators.data?.indicators.find(i => i.id === data?.Slide?.indicator.id));
      setGeography(data?.Slide?.geography?.id);
    } else {
      setIndicator(null);
      setGeography(null);
    }
  }, [data?.Slide, allIndicators.data?.indicators]);

  useEffect(() => {
    if (indicator) {
      setYears(
        allIndicators.data?.indicators
          .filter(i => i.varname === indicator?.varname)
          .map(i => ({
            key: i.id,
            value: i.id,
            text: i.year,
          }))
      );
      setGeographies(indicator?.geographies.map(g => ({ key: g.id, value: g.id, text: g.title })));
      if (!geography || !indicator?.geographies.find(g => g.id === geography)) {
        setGeography(indicator?.geographies[0]?.id);
      }
    } else {
      setYears([]);
      setGeographies([]);
    }
  }, [indicator]);

  useEffect(() => {
    onIndicatorChange(indicator?.id, geography);
  }, [indicator, geography]);

  return (
    <Form className={styles.chooser}>
      <Form.Group widths="equal">
        <Form.Select
          search
          selection
          placeholder="Indicator"
          options={indicators}
          value={indicator?.id}
          onChange={(e, { value }) =>
            setIndicator(allIndicators.data?.indicators.find(i => i.id === value))
          }
        />
        <Form.Select
          selection
          options={years}
          value={indicator?.id}
          onChange={(e, { value }) =>
            setIndicator(allIndicators.data?.indicators.find(i => i.id === value))
          }
        />
        <Form.Select
          selection
          options={geographies}
          value={geography}
          onChange={(e, { value }) => setGeography(value)}
        />
      </Form.Group>
    </Form>
  );
};

Chooser.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default Chooser;
