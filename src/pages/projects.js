import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Button, Container, Header as Heading, Icon, Image, Segment } from 'semantic-ui-react';
import { v4 } from 'uuid';
import withApollo from '../providers/withApollo';

import Header from '../components/Header';
import Head from '../components/Head';

const GET_PROJECTS = gql`
  query GetProjects($user: ID!) {
    allProjects(where: { user: { id: $user } }) {
      id
      title
      description
      category
      url
      createdAt
      updatedAt
      published
      tags {
        name
      }
    }
  }
`;

const CREATE_PROJECT = gql`
  mutation AddProject(
    $title: String
    $description: String
    $imageTitle: String
    $source: String
    $url: String
    $tags: TagRelateToManyInput
    $category: ProjectCategoryType
    $uid: String
  ) {
    createProject(
      data: {
        title: $title
        description: $description
        tags: $tags
        category: $category
        imageTitle: $imageTitle
        source: $source
        url: $url
        uid: $uid
      }
    ) {
      id
    }
  }
`;

const Projects = ({ user }) => {
  const [isLoading, setLoading] = useState(false);
  const { loading, error, data } = useQuery(GET_PROJECTS, { variables: { user: user.id } });
  const [createProject] = useMutation(CREATE_PROJECT);

  const newProject = () => {
    setLoading(true);
    createProject({
      variables: {
        title: 'New Story',
        uid: v4(),
      },
    }).then(
      ({
        data: {
          createProject: { id },
        },
      }) => window.location.replace(`/project/${id}`)
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Head title="Projects" />
      <Header user={user} />
      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        <a href="/" style={{ display: 'block', float: 'right', lineHeight: '36px' }}>
          <span>
            <Icon name="grid layout" />
            Gallery
          </span>
        </a>
        <Heading as="h1" style={{ marginTop: 30 }}>
          My Stories
        </Heading>
        <Button
          content="New Story"
          loading={isLoading}
          icon="plus"
          size="large"
          color="blue"
          as="a"
          onClick={newProject}
          style={{ margin: '10px 0 20px' }}
        />
        <Segment.Group>
          {data.allProjects.map(proj => (
            <Segment key={proj.id} style={{ padding: 20 }}>
              {proj.url && <Image src={proj.url} floated="left" style={{ height: 55 }} />}
              <a href={`/project/${proj.id}`} style={{ fontWeight: 'bold', fontSize: '1.25em' }}>
                {`${proj.title}${proj.category ? ` - ${proj.category}` : ''}`}
              </a>
              <Button
                floated="right"
                content="Editor"
                icon="edit"
                as="a"
                href={`/edit/${proj.id}`}
              />
              <Button
                basic
                floated="right"
                content="Preview"
                icon="play"
                as="a"
                style={{ marginRight: 10 }}
                href={`/view/${proj.id}`}
              />
              <div style={{ clear: 'right' }}>
                {proj.updatedAt && (
                  <span style={{ marginRight: 10 }}>
                    {`Modified: ${new Date(proj.updatedAt).toLocaleDateString()}`}
                  </span>
                )}
                {proj.createdAt && (
                  <span style={{ marginRight: 10 }}>
                    {`Created: ${new Date(proj.createdAt).toLocaleDateString()}`}
                  </span>
                )}
                {proj.published && (
                  <span>
                    <Icon name="check" />
                    Published
                  </span>
                )}
              </div>
            </Segment>
          ))}
        </Segment.Group>
        <Button icon labelPosition="left" floated="right" size="tiny" as="a" href="/download">
          <Icon name="download" />
          Download
        </Button>
      </Container>
    </div>
  );
};

Projects.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default withApollo(Projects);

export async function getServerSideProps({ req }) {
  return {
    props: {
      user: req.user,
    },
  };
}
