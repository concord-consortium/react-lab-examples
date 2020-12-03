var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'simple-embed': './js/simple-embed.js',
    'model-only': './js/model-only.js',
    'observe-and-set': './js/observe-and-set.js',
    'scripting-api': './js/scripting-api.js',
    'delay-props-update': './js/delay-props-update.js',
    'logging': './js/logging.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: 'public'},
        // Copy Lab standalone distribution provided together with react-lab module.
        {from: 'node_modules/react-lab/dist/lab', to: 'lab/'}
      ]
    })
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  }
};
