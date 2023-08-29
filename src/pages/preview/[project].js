import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from '../../providers/withApollo';

import View from '../../components/View';
import Head from '../../components/Head';
import useLocale from '../../hooks/useLocale';

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

const Preview = () => {
  const router = useRouter();
  const { loadingText } = useLocale();
  const { project } = router.query;

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { project },
    pollInterval: 5000,
  });

  if (loading || !project) return <p>{loadingText}</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Head title={data.Project.title} />
      <View data={data} />
    </>
  );
};

export default withApollo(Preview, { getDataFromTree });
