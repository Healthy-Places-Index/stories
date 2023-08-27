import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Container, Header as Heading, Icon, Image } from 'semantic-ui-react';
import withApollo from '../providers/withApollo';

import Header from '../components/Header';
import Head from '../components/Head';
import Gallery from '../components/Gallery';
import useLocale from '../hooks/useLocale';

export const Home = ({ user, data }) => {
  const { locale } = useRouter();
  const { gallery, signUp, manage, login } = useLocale();

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header user={user} />
      <Head title="imagineRio Narratives" />
      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        {!user && (
          <>
            <a
              href={locale === 'pt' ? '/en' : '/pt'}
              style={{ display: 'block', float: 'right', marginLeft: 20 }}
            >
              <span>
                <Icon name="flag" />
                {locale === 'pt' ? 'English Version' : 'Versão em Português'}
              </span>
            </a>
            <a
              href={`/${locale}/signup`}
              style={{ display: 'block', float: 'right', marginLeft: 20 }}
            >
              <span>
                <Icon name="signup" />
                {signUp}
              </span>
            </a>
          </>
        )}
        <a href={`/${locale}/projects`} style={{ display: 'block', float: 'right' }}>
          <span>
            <Icon name={user && user.verified ? 'map outline' : 'user circle'} />
            {user && user.verified ? manage : login}
          </span>
        </a>
        <Heading as="h1" style={{ margin: '50px 0' }}>
          {gallery}
        </Heading>
        <Gallery data={data} />
        <Image src="img/hrc-logo.png" style={{ margin: '50px 0' }} />
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
          id
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
