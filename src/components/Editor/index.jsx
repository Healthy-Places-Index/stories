/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from '@apollo/client';
import { Dimmer, Dropdown, Form, Grid, Input, Loader } from 'semantic-ui-react';

import {
  GET_SLIDES,
  UPDATE_IMAGE,
  UPDATE_SLIDE_DESCRIPTION,
  UPDATE_SLIDE_MEDIA,
  UPDATE_SLIDE_SIZE,
  UPDATE_SLIDE_TITLE,
} from './graphql';
import { useDraw } from '../../providers/DrawProvider';
import debouncedMutation from '../../providers/debouncedMutation';

import AtlasContext from '../Atlas/Context';
import Image from '../Image';
import Wysiwyg from '../Wysiwyg';
import DrawList from '../DrawList';
import validateMediaUrl from '../../utils/validateMediaUrl';

import styles from './Editor.module.css';
import Chooser from '../Chooser';

const Editor = ({ slide }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState('');
  const [mediaError, setMediaError] = useState(false);
  const [imageMeta, setImageMeta] = useState(null);
  const [size, setSize] = useState('Small');

  const { loading, error, data } = useQuery(GET_SLIDES, {
    variables: { slide },
  });

  const [, dispatch] = useDraw();

  useEffect(() => dispatch(['SLIDE', slide]), [slide]);

  useEffect(() => {
    setTitle(loading && !data ? '' : data.Slide.title || '');
    setDescription(loading && !data ? '' : data.Slide.description || '');
    setMedia(loading && !data ? '' : data.Slide.media || '');
    setSize(loading && !data ? 'Small' : data.Slide.size);
    setImageMeta(
      loading && !data
        ? {}
        : {
            imageTitle: data.Slide.imageTitle,
            source: data.Slide.source,
            url: data.Slide.url,
          }
    );
  }, [loading, data]);

  const [updateTitle] = useMutation(UPDATE_SLIDE_TITLE);
  const [updateDescription] = useMutation(UPDATE_SLIDE_DESCRIPTION);
  const [updateSize] = useMutation(UPDATE_SLIDE_SIZE);
  const [updateImage] = useMutation(UPDATE_IMAGE);
  const [updateMedia] = useMutation(UPDATE_SLIDE_MEDIA);

  const titleTimer = useRef();
  const descriptionTimer = useRef();
  const sizeTimer = useRef();
  const imageTimer = useRef();
  const mediaTimer = useRef();

  if (loading)
    return (
      <Dimmer active>
        <Loader size="huge">Loading...</Loader>
      </Dimmer>
    );
  if (error) return <p>Error :(</p>;

  return (
    <Grid stretched style={{ height: '100%', margin: 0 }}>
      <Grid.Row style={{ padding: 0 }}>
        <Grid.Column width={6} className={styles.editor}>
          <Form size="large">
            <Form.Field>
              <label>Title</label>
              <Input
                value={title}
                onChange={(e, { value }) => {
                  setTitle(value);
                  titleTimer.current = debouncedMutation({
                    slide,
                    timerRef: titleTimer,
                    mutation: updateTitle,
                    values: { title: value },
                  });
                }}
              />
            </Form.Field>
            <Wysiwyg
              label="Description"
              value={description}
              onEditorChange={value => {
                setDescription(value);
                descriptionTimer.current = debouncedMutation({
                  slide,
                  timerRef: descriptionTimer,
                  mutation: updateDescription,
                  values: { description: value },
                });
              }}
            />
            <Form.Field>
              <label>Size</label>
              <Dropdown
                placeholder="Select Size"
                fluid
                selection
                value={size}
                options={[
                  { text: 'Fullscreen', value: 'Fullscreen' },
                  { text: 'Medium', value: 'Medium' },
                  { text: 'Small', value: 'Small' },
                ]}
                onChange={(e, { value }) => {
                  setSize(value);
                  sizeTimer.current = debouncedMutation({
                    slide,
                    timerRef: sizeTimer,
                    mutation: updateSize,
                    values: { size: value },
                  });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <Image
                image={imageMeta}
                updateHandler={(id, value) => {
                  setImageMeta({ ...imageMeta, ...value });
                  imageTimer.current = debouncedMutation({
                    slide,
                    timerRef: imageTimer,
                    mutation: updateImage,
                    values: { ...imageMeta, ...value },
                  });
                }}
              />
            </Form.Field>
            <Form.Field error={mediaError}>
              <label>Media Embed</label>
              <Input
                placeholder="YouTube, SoundCloud URL"
                icon="linkify"
                iconPosition="left"
                value={media}
                onChange={(e, { value }) => {
                  setMedia(value);
                  if (!value || validateMediaUrl(value)) {
                    mediaTimer.current = debouncedMutation({
                      slide,
                      timerRef: mediaTimer,
                      mutation: updateMedia,
                      values: { media: value },
                    });
                    setMediaError(false);
                  } else {
                    setMediaError(true);
                  }
                }}
              />
            </Form.Field>
            <DrawList slide={slide} />
          </Form>
        </Grid.Column>
        <Grid.Column width={10} style={{ padding: 0 }}>
          <AtlasContext slide={slide} />
          <Chooser slide={slide} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Editor.propTypes = {
  slide: PropTypes.string.isRequired,
};

export default Editor;
