/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation, useQuery } from '@apollo/client';
import { map } from 'lodash';
import ErrorPage from 'next/error';
import {
  Button,
  Checkbox,
  Container,
  Dimmer,
  Divider,
  Dropdown,
  Form,
  Header as Heading,
  Input,
  Loader,
} from 'semantic-ui-react';
import withApollo from '../../providers/withApollo';

import Image from '../../components/Image';
import Header from '../../components/Header';
import Head from '../../components/Head';
import Confirm from '../../components/Confirm';
import Wysiwyg from '../../components/Wysiwyg';
import useProjectAuth from '../../providers/useProjectAuth';

export const GET_PROJECT = gql`
  query GetProject($project: ID!) {
    Project(where: { id: $project }) {
      id
      title
      description
      tags {
        id
      }
      category
      imageTitle
      source
      url
      published
    }
    categories: __type(name: "ProjectCategoryType") {
      values: enumValues {
        key: name
        text: name
        value: name
      }
    }
    tags: allTags {
      key: id
      text: name
      value: id
    }
  }
`;

const ADD_TAG = gql`
  mutation AddTag($name: String) {
    createTag(data: { name: $name }) {
      key: id
      text: name
      value: id
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $project: ID!
    $title: String
    $description: String
    $imageTitle: String
    $source: String
    $url: String
    $published: Boolean
    $tags: TagRelateToManyInput
    $category: ProjectCategoryType
  ) {
    updateProject(
      id: $project
      data: {
        title: $title
        description: $description
        tags: $tags
        category: $category
        imageTitle: $imageTitle
        source: $source
        url: $url
        published: $published
      }
    ) {
      id
      title
      description
      tags {
        id
      }
      category
      imageTitle
      source
      url
      published
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export const Create = ({ user, project, statusCode }) => {
  if (statusCode) return <ErrorPage statusCode={statusCode} />;

  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { project } });
  const [addTag] = useMutation(ADD_TAG);
  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);

  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageMeta, setImageMeta] = useState(null);
  const [published, setPublished] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTags(loading ? [] : map(data.Project.tags, 'id'));
    setCategory(loading ? null : data.Project.category);
    setTitle(loading ? '' : data.Project.title);
    setDescription(loading ? '' : data.Project.description);
    setPublished(loading ? false : data.Project.published || false);
    setImageMeta(
      loading
        ? null
        : {
            imageTitle: data.Project.imageTitle,
            source: data.Project.source,
            url: data.Project.url,
          }
    );
  }, [loading, data]);

  const submitForm = () => {
    setLoading(true);
    updateProject({
      variables: {
        project,
        title,
        description,
        ...imageMeta,
        tags: {
          connect: tags.map(t => ({ id: t })),
        },
        category,
        published,
      },
    }).then(() => window.location.replace(`/projects`));
  };

  const removeProject = id => {
    setLoading(true);
    deleteProject({
      variables: {
        id,
      },
    }).then(() => window.location.replace(`/projects`));
  };

  if (loading)
    return (
      <Dimmer active>
        <Loader size="huge">Loading...</Loader>
      </Dimmer>
    );
  if (error) return <p>ERROR</p>;

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Head title={data.Project.title} />
      <Header user={user} />
      <Container style={{ marginTop: 30, paddingBottom: 30 }} text>
        <Button content="My Stories" icon="angle left" as="a" href="/projects" />
        <Heading as="h1">Edit Story Metadata</Heading>
        <Form loading={isLoading}>
          <Form.Input
            readOnly
            label="URL"
            icon="linkify"
            value={window.location.href.replace(/project/, 'view')}
          />
          <Form.Field>
            <Checkbox
              label="Submit for publishing"
              checked={published}
              onChange={(e, { checked }) => setPublished(checked)}
            />
          </Form.Field>
          <Divider style={{ margin: '40px 0' }} />
          <Form.Field required>
            <label>Title</label>
            <Input value={title} onChange={(e, { value }) => setTitle(value)} />
          </Form.Field>
          <Wysiwyg label="Description" value={description || ''} onEditorChange={setDescription} />
          {imageMeta && (
            <Form.Field>
              <label>Image</label>
              <Image
                image={imageMeta}
                addHandler={() => {}}
                updateHandler={(id, value) => setImageMeta({ ...imageMeta, ...value })}
              />
            </Form.Field>
          )}
          <Form.Field>
            <label>Tags</label>
            <Dropdown
              options={data.tags}
              placeholder="Select tags"
              search
              multiple
              selection
              fluid
              allowAdditions
              value={tags}
              onAddItem={(e, { value }) =>
                addTag({
                  variables: { name: value },
                  refetchQueries: ['GetTags'],
                  awaitRefetchQueries: true,
                }).then(({ data: { createTag } }) => setTags([...tags, createTag.key]))
              }
              onChange={(e, { value }) => setTags(value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <Dropdown
              placeholder="Select category"
              fluid
              selection
              value={category}
              onChange={(e, { value }) => setCategory(value)}
              options={[
                { key: 'null', text: '', value: null },
                ...data.categories.values.map(v => ({
                  ...v,
                  text: v.text,
                })),
              ]}
            />
          </Form.Field>
          <Button
            size="big"
            floated="right"
            primary
            type="submit"
            onClick={submitForm}
            style={{ paddingLeft: 60, paddingRight: 60 }}
            disabled={isLoading}
          >
            Save
          </Button>
          <Button
            size="big"
            floated="right"
            href="/projects"
            style={{ marginRight: 20 }}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <div style={{ clear: 'left', margin: 100 }} />
        </Form>
        <Confirm
          disabled={isLoading}
          buttonIcon="trash"
          buttonTitle="Delete Story"
          confirmHandler={() => removeProject(project)}
          confirmTitle="Are you sure you want to delete this story?"
        >
          <p>Confirm Delete</p>
        </Confirm>
      </Container>
    </div>
  );
};

Create.propTypes = {
  user: PropTypes.shape(),
  project: PropTypes.string.isRequired,
  statusCode: PropTypes.number,
};

Create.defaultProps = {
  user: null,
  statusCode: null,
};

export default withApollo(Create);

export async function getServerSideProps({ req, params: { project } }) {
  let user = null;
  if (req.user) {
    user = req.user;
  }
  const statusCode = await useProjectAuth({ req, project });

  return {
    props: {
      user,
      project,
      statusCode,
    },
  };
}
