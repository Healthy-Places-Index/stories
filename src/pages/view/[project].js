import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import View from '../../components/View';
import Head from '../../components/Head';

const Preview = ({ data }) => (
  <>
    <Head title={data.Project.title} />
    <View data={data} />
  </>
);

export default Preview;

Preview.propTypes = {
  data: PropTypes.shape().isRequired,
};

export async function getServerSideProps({ params, req }) {
  const {
    data: { data },
  } = await axios.post(`${req.protocol}://${req.get('Host')}/admin/api`, {
    query: `query GetFullProject($project: ID!) {
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
    }`,
    variables: {
      project: params.project,
    },
  });

  return { props: { data } };
}
