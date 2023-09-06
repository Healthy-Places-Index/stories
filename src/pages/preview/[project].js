import React from 'react';
import { gql, useQuery } from '@apollo/client';
import ErrorPage from 'next/error';
import PropTypes from 'prop-types';
import withApollo from '../../providers/withApollo';

import View from '../../components/View';
import Head from '../../components/Head';
import useProjectAuth from '../../providers/useProjectAuth';

export const GET_PROJECT = gql`
  query GetFullProject($project: ID!) {
    Project(where: { id: $project }) {
      title
      description
      imageTitle
      source
      url
      user {
        name
      }
      slides(sortBy: order_ASC) {
        id
        title
        description
        longitude
        latitude
        zoom
        bearing
        pitch
        size
        media
        imageTitle
        url
        source
        annotations {
          id
          feature
        }
        selectedFeature
        indicator {
          id
          title
          varname
          year
          source
          url
        }
        geography {
          id
          layer
        }
      }
    }
  }
`;

const Preview = ({ project, statusCode }) => {
  if (statusCode) return <ErrorPage statusCode={statusCode} />;

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { project },
    pollInterval: 5000,
  });

  if (loading || !project) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Head title={data.Project.title} />
      <View data={data} />
    </>
  );
};

export async function getServerSideProps({ req, params: { project } }) {
  const statusCode = await useProjectAuth({ req, project });

  return {
    props: {
      project,
      statusCode,
    },
  };
}

Preview.propTypes = {
  project: PropTypes.string.isRequired,
  statusCode: PropTypes.number,
};

Preview.defaultProps = {
  statusCode: null,
};

export default withApollo(Preview);
