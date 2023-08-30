import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, gql } from '@apollo/client';
import Avatar from 'boring-avatars';
import { Container, Image, Dropdown, Header as Heading } from 'semantic-ui-react';

import styles from './Header.module.css';
import { hpi } from '../Atlas/utils';

const UNAUTH_MUTATION = gql`
  mutation {
    unauthenticateUser {
      success
    }
  }
`;

const pages = [
  {
    name: {
      en: 'Home',
      pt: 'Início',
    },
    url: '/',
    active: false,
    relative: false,
  },
  {
    name: {
      en: 'About',
      pt: 'Sobre',
    },
    url: '/about',
    active: false,
    relative: false,
  },
  {
    name: {
      en: 'People',
      pt: 'Equipe',
    },
    url: '/people',
    active: false,
    relative: false,
  },
  {
    name: {
      en: 'Research',
      pt: 'Pesquisa',
    },
    url: '/research',
    active: false,
    relative: false,
  },
  {
    name: {
      en: 'Press',
      pt: 'Imprensa',
    },
    url: '/press',
    active: false,
    relative: false,
  },
  {
    name: {
      en: 'Narratives',
      pt: 'Narrativas',
    },
    url: '/',
    active: true,
    relative: true,
  },
  {
    name: {
      en: 'Iconography',
      pt: 'Iconografia',
    },
    url: '/iconography',
    active: false,
    relative: false,
  },
  {
    name: {
      en: 'Map',
      pt: 'Mapa',
    },
    url: '/map',
    active: false,
    relative: false,
  },
];

const Header = ({ user }) => {
  const [signOut, { client }] = useMutation(UNAUTH_MUTATION, {
    onCompleted: async () => {
      // Ensure there's no old authenticated data hanging around
      await client.clearStore();
      window.location.replace('/');
    },
  });

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Container>
        <div className={`${styles.header} ${styles.headerFlex}`}>
          <Image src="/img/hpi-logo.png" style={{ width: 40, marginRight: 15 }} />
          <span style={{ fontSize: 32 }}>Healthy Place Stories</span>
          <div className={styles.spacer} />
          <div className={styles.headerFlex}>
            {user && user.verified && (
              <Dropdown
                icon={null}
                pointing
                style={{ marginTop: 5, marginLeft: 15 }}
                trigger={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Avatar size={35} name={user.name} variant="beam" colors={hpi} />
                }
              >
                <Dropdown.Menu style={{ marginLeft: -40 }}>
                  <Dropdown.Item text="My Stories" as="a" href="/projects" />
                  <Dropdown.Item text="Logout" onClick={signOut} />
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape(),
};

Header.defaultProps = {
  user: null,
};

export default Header;
