const { Text, Integer } = require('@keystonejs/fields');

module.exports = {
  fields: {
    layer: {
      type: Text,
    },
    title: {
      type: Text,
    },
    ordering: {
      type: Integer,
    },
  },
  labelField: 'title',
};
