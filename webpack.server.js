const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/server.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: 'babel-loader'
      }
    ]
  }
};