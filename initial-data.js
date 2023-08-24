/* eslint-disable no-console */
const crypto = require('crypto');
const axios = require('axios');
const { map, flatten, omit, pick } = require('lodash');

const randomString = () => crypto.randomBytes(6).hexSlice();

const addInitialUser = async (keystone, context) => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      _allUsersMeta {
        count
      }
    }`,
  });

  if (count === 0) {
    const password = randomString();
    const email = 'admin@example.com';

    const { errors } = await keystone.executeGraphQL({
      context,
      query: `mutation initialUser($password: String, $email: String) {
        createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
          id
        }
      }`,
      variables: { password, email },
    });

    if (errors) {
      console.log('failed to create initial user:');
      console.log(errors);
    } else {
      console.log(`
      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
    `);
    }
  }
};

const populateGeographies = async (keystone, context) => {
  const { data: geographies } = await axios.get(
    `${process.env.NEXT_PUBLIC_API}geographies/hpi?key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const {
    data: { allGeographies },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      allGeographies {
        layer
      }
    }`,
  });

  return Promise.all(
    geographies
      .filter(geography => !allGeographies.find(g => g.layer === geography.layer))
      .map((geography, ordering) =>
        keystone.executeGraphQL({
          context,
          query: `mutation InitGeography($name: String, $layer: String, $ordering: Int) {
          createGeography(data: { title: $name, layer: $layer, ordering: $ordering }) {
            id
          }
        }`,
          variables: { ...geography, ordering },
        })
      )
  );
};

const populateIndicators = async (keystone, context) => {
  const { data: indicators } = await axios.get(
    `${process.env.NEXT_PUBLIC_API}indicators/hpi?key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  console.log(indicators);

  const {
    data: { allGeographies },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      allGeographies {
        id
        layer
      }
    }`,
  });

  const {
    data: { allIndicators },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      allIndicators {
        varname
      }
    }`,
  });

  return Promise.all(
    indicators
      .filter(indicator => !allIndicators.find(i => i.varname === indicator.varname))
      .map(async indicator =>
        Promise.all(
          indicator.dates.map(year => {
            console.log(
              JSON.stringify(
                {
                  ...indicator,
                  year,
                  geographies: {
                    connect: allGeographies
                      .filter(g => indicator.geographies.includes(g.layer))
                      .map(g => pick(g, 'id')),
                  },
                },
                null,
                2
              )
            );
            return keystone.executeGraphQL({
              context,
              query: `mutation InitIndicator($varname: String, $title: String, $year: Int, $source: String, $url: String, $geographies: GeographyRelateToManyInput) {
                createIndicator(data: { varname: $varname, title: $title, year: $year, source: $source, url: $url, geographies: $geographies }) {
                  id
                }
              }`,
              variables: {
                ...pick(indicator, 'varname', 'title', 'source', 'url'),
                year,
                geographies: {
                  connect: allGeographies
                    .filter(g => indicator.geographies.includes(g.layer))
                    .map(g => pick(g, 'id')),
                },
              },
              logError: true,
            });
          })
        )
      )
  );
};

const populateLayers = async (keystone, context) => {
  // Populate layers
  const {
    data: { allLayers },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      allLayers {
        id
        layerId
      }
    }`,
  });
  const allLayerNames = map(allLayers, 'layerId');

  let { data: layers } = await axios.get(`${process.env.NEXT_PUBLIC_SEARCH_API}/layers`);
  layers = layers.map(layer => ({
    layerId: layer.name.toLowerCase(),
    title: layer.title,
    remoteId: layer.id,
  }));

  await Promise.all(
    layers.map(layer => {
      if (!allLayerNames.includes(layer.layerId)) {
        return keystone.executeGraphQL({
          context,
          query: `
            mutation InitLayer($layerId: String, $title: String, $remoteId: Int) {
              createLayer(data: { layerId: $layerId, title: $title, remoteId: $remoteId }) {
                id
              }
            }`,
          variables: layer,
        });
      }
      const existingLayer = allLayers.find(l => l.layerId === layer.layerId);
      if (!existingLayer) return Promise.resolve();
      const { id } = existingLayer;
      return keystone.executeGraphQL({
        context,
        query: `
          mutation UpdateLayer($id: ID!, $layerId: String, $title: String, $remoteId: Int) {
            updateLayer(id: $id, data: { layerId: $layerId, title: $title, remoteId: $remoteId }) {
              id
            }
          }`,
        variables: { id, ...layer },
      });
    })
  );
};

const populateBasemaps = async (keystone, context) => {
  // Populate basemaps
  const {
    data: { allBasemaps },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      allBasemaps {
        id
        ssid
      }
    }`,
  });
  const allBasemapIds = map(allBasemaps, 'ssid');
  let { data } = await axios.get(`${process.env.NEXT_PUBLIC_SEARCH_API}/documents`);
  data = data.filter(d => d.title !== 'Views');
  const documents = flatten(map(data, 'Documents'));
  const documentReqs = documents.map(m => {
    const variables = {
      ...m,
      firstYear: m.firstyear,
      lastYear: m.lastyear,
    };
    if (!allBasemapIds.includes(`${m.ssid}`) && !allBasemapIds.includes(`SSID${m.ssid}`)) {
      return keystone.executeGraphQL({
        context,
        query: `
          mutation InitBasemap($ssid: String, $title: String, $firstYear: Int, $lastYear: Int, $longitude: Float, $latitude: Float, $thumbnail: String, $creator: String) {
            createBasemap(data: { ssid: $ssid, title: $title, firstYear: $firstYear, lastYear: $lastYear, longitude: $longitude, latitude: $latitude, thumbnail: $thumbnail, creator: $creator }) {
              id
            }
          }`,
        variables,
      });
    }

    const existingBasemap = allBasemaps.find(l => l.ssid === m.ssid || l.ssid === `SSID${m.ssid}`);
    if (!existingBasemap) return Promise.resolve();
    variables.id = existingBasemap.id;

    return keystone.executeGraphQL({
      context,
      query: `
        mutation UpdateBasemap($id: ID!, $ssid: String, $title: String, $firstYear: Int, $lastYear: Int, $longitude: Float, $latitude: Float, $thumbnail: String, $creator: String) {
          updateBasemap(id: $id, data: { ssid: $ssid, title: $title, firstYear: $firstYear, lastYear: $lastYear, longitude: $longitude, latitude: $latitude, thumbnail: $thumbnail, creator: $creator }) {
            id
          }
        }`,
      variables,
    });
  });
  return Promise.all(documentReqs);
};

const migrateImages = async (keystone, context) => {
  const {
    data: { allSlides },
  } = await keystone.executeGraphQL({
    context,
    query: `query {
      allSlides {
        id
        imageTitle
        image {
          imageTitle: title
          creator
          source
          date
          url
        }
      }
    }`,
  });

  const imageUpdateRequests = allSlides
    .filter(slide => slide.image && !slide.imageTitle)
    .map(slide => {
      const { url } = slide.image;
      const imageTitle = Object.values(omit(slide.image, 'url'))
        .filter(v => v)
        .join(', ');

      return keystone.executeGraphQL({
        context,
        query: `mutation UpdateSlideImage($id: ID!, $imageTitle: String, $url: String) {
          updateSlide(id: $id, data: { imageTitle: $imageTitle, url: $url }) {
            id
          }
        }`,
        variables: {
          id: slide.id,
          url,
          imageTitle,
        },
      });
    });
  return Promise.all(imageUpdateRequests);
};

module.exports = async keystone => {
  const context = keystone.createContext({ skipAccessControl: true });
  await addInitialUser(keystone, context);
  await populateGeographies(keystone, context);
  await populateIndicators(keystone, context);
  // await populateLayers(keystone, context);
  // await populateBasemaps(keystone, context);
  // await migrateImages(keystone, context);
};
