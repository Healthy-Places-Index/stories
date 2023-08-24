/* eslint-disable no-console */
const crypto = require('crypto');
const axios = require('axios');
const { pick } = require('lodash');

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

module.exports = async keystone => {
  const context = keystone.createContext({ skipAccessControl: true });
  await addInitialUser(keystone, context);
  await populateGeographies(keystone, context);
  await populateIndicators(keystone, context);
};
