const { Text, Integer, Relationship, Url } = require('@keystonejs/fields');

module.exports = {
  fields: {
    varname: {
      type: Text,
    },
    title: {
      type: Text,
    },
    domain: {
      type: Text,
    },
    year: {
      type: Integer,
    },
    geographies: {
      type: Relationship,
      ref: 'Geography',
      many: true,
    },
    source: {
      type: Text,
    },
    url: {
      type: Url,
    },
  },
  labelField: 'title',
};
