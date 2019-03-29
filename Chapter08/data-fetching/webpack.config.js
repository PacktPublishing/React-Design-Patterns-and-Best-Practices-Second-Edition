const nodeExternals = require('webpack-node-externals');
const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const rules = [{
  test: /\.(jsx|js)$/,
  use: 'babel-loader',
  exclude: /node_modules/
}];

const client = {
  mode,
  entry: './src/client.js',
  output: {
      path: path.resolve(__dirname, './dist/public'),
    filename: 'bundle.js',
  },
  module: {
    rules
  }
};

const server = {
  mode,
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
  },
  module: {
    rules
  },
  target: 'node',
  externals: [nodeExternals()]
};

module.exports = [client, server];
