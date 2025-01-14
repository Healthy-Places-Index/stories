import React, { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import {
  Header as Heading,
  Container,
  Segment,
  Form,
  Button,
  Image,
  Message,
} from 'semantic-ui-react';
import withApollo from '../providers/withApollo';

import Header from '../components/Header';
import Head from '../components/Head';

const Login = () => {
  const AUTH_MUTATION = gql`
    mutation signin($identity: String, $secret: String) {
      authenticate: authenticateUserWithPassword(email: $identity, password: $secret) {
        item {
          id
          verified
        }
      }
    }
  `;

  const [identity, setIdentity] = useState('');
  const [secret, setSecret] = useState('');
  const [reloading, setReloading] = useState(false);
  const [error, setError] = useState('');

  const [signIn, { loading, client }] = useMutation(AUTH_MUTATION, {
    variables: { identity, secret },
    onCompleted: async ({ authenticate }) => {
      setReloading(true);
      if (!authenticate.item.verified) {
        setError("You haven't verified your account yet. Please check your email.");
        setReloading(false);
      } else {
        await client.clearStore();
        window.location.reload(true);
      }
    },
    onError: () => {
      setError('There was an error logging in. Please try again.');
    },
  });

  const onSubmit = e => {
    e.preventDefault();
    if (!loading) {
      signIn();
    }
  };

  useEffect(() => {
    setError(false);
  }, [identity, secret]);

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Head title="Login" />
      <Header />
      <Container text>
        <Heading as="h1" style={{ margin: '20% 0 50px' }}>
          Welcome to Healthy Places Stories
        </Heading>
        <Segment loading={reloading}>
          <Heading as="h3" style={{ margin: '10px 0 30px' }}>
            Login to your Healthy Places Stories Account
          </Heading>
          <Form method="POST" onSubmit={onSubmit}>
            <Form.Input
              name="email"
              label="Email"
              type="email"
              value={identity}
              error={Boolean(error)}
              onChange={e => setIdentity(e.target.value)}
            />
            <Form.Input
              name="password"
              label="Password"
              type="password"
              value={secret}
              error={Boolean(error)}
              onChange={e => setSecret(e.target.value)}
            />
            <a href="/reset" style={{ float: 'right', marginBottom: 15 }}>
              Forgot Password
            </a>
            <Button type="submit" fluid primary loading={loading}>
              Login
            </Button>
            {error && <Message negative>{error}</Message>}
          </Form>
        </Segment>
        <Image src="img/hrc-logo.png" />
      </Container>
    </div>
  );
};

export default withApollo(Login);
