var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'simple-embed': './js/simple-embed.js',
    'observe-and-set': './js/observe-and-set.js',
    'observe-and-set-model-only': './js/observe-and-set-model-only.js',
    'delay-props-update': './js/delay-props-update.js',
    'logging': './js/logging.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'public'},
      // Copy Lab standalone distribution provided together with react-lab module.
      {from: 'node_modules/react-lab/dist/lab', to: 'lab/'}
    ])
  ]
};
