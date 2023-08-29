import { groupBy } from 'lodash';

export const hpi = ['#2171b5', '#9ecae1', '#a6dba0', '#008837'];
export const blue = ['#edf8fb', '#b3cde3', '#8c96c6', '#88419d'];

const makeStyle = (values, grouper, colors) => {
  const groups = groupBy(values, grouper);
  return [
    'case',
    ...Object.keys(groups).reduce(
      (memo, key, i) => [
        ...memo,
        ['in', ['get', 'geoid'], ['literal', groups[key].map(f => f.geoid)]],
        colors[i],
      ],
      []
    ),
    '#ccc',
  ];
};

export const makeChoropleth = data => {
  return makeStyle(data, d => Math.min(3, Math.floor(d.percentile * 4)), hpi);
};
