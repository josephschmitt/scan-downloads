import minimist from 'minimist';

export default minimist(process.argv.slice(2), {
  'string': ['app'],
  'alias': {
    'app': ['a'],
  },
  'unknown': () => false,
});
