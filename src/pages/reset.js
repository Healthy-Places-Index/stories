import React, { useState } from 'react';
import axios from 'axios';
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

const Reset = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      return axios.post('/reset', { email }).then(() => {
        setLoading(false);
        setSuccess(true);
      });
    }
    return setError('Please fill out all required fields');
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Head title="Reset your password" />
      <Header />
      <Container text>
        <Heading as="h1" style={{ margin: '50px 0' }}>
          Reset your password
        </Heading>
        <Segment loading={loading}>
          <Heading as="h3" style={{ margin: '10px 0 30px' }}>
            Enter your email address below and we will send you a link to reset your password.
          </Heading>
          <Form method="POST" onSubmit={onSubmit}>
            <Form.Input
              required
              name="email"
              label="Email"
              type="email"
              value={email}
              error={error && !email ? 'Email is required' : null}
              onChange={e => setEmail(e.target.value)}
            />
            <Button type="submit" fluid primary loading={loading}>
              Reset Password
            </Button>
            {error && <Message negative>{error}</Message>}
            {success && <Message success>Password reset request has been received</Message>}
          </Form>
        </Segment>
        <Image src="img/hrc-logo.png" />
      </Container>
    </div>
  );
};

export default withApollo(Reset);
