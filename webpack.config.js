const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bin/bundle.js',
  },
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }]
  }
};
