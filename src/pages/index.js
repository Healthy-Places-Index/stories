import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container, Header as Heading, Icon } from 'semantic-ui-react';
import withApollo from '../providers/withApollo';

import Header from '../components/Header';
import Head from '../components/Head';
import Gallery from '../components/Gallery';

export const Home = ({ user, data }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header user={user} />
      <Head title="HPI Stories" />
      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        {!user && (
          <>
            <a href="/signup" style={{ display: 'block', float: 'right', marginLeft: 20 }}>
              <span>
                <Icon name="signup" />
                Sign Up
              </span>
            </a>
          </>
        )}
        <a href="/projects" style={{ display: 'block', float: 'right' }}>
          <span>
            <Icon name={user && user.verified ? 'map outline' : 'user circle'} />
            {user && user.verified ? 'My Stories' : 'Login'}
          </span>
        </a>
        <Heading as="h1" style={{ margin: '50px 0' }}>
          Story Gallery
        </Heading>
        <Gallery data={data} />
      </Container>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.string,
  data: PropTypes.shape({
    allProjects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
};

Home.defaultProps = {
  user: null,
};

export default withApollo(Home);

export async function getServerSideProps({ req }) {
  const {
    data: { data },
  } = await axios.post(`${req.protocol}://${req.get('Host')}/admin/api`, {
    query: `query GetPublished {
        allProjects(where: { gallery: true }) {
          id: uid
          title
          description
          category
          url
          tags {
            name
          }
          user {
            name
          }
          createdAt
        }
        categories: __type(name: "ProjectCategoryType") {
          values: enumValues {
            name
          }
        }
      }
    `,
  });

  let user = null;
  if (req.user) user = req.user;

  return {
    props: {
      data,
      user,
    },
  };
}
