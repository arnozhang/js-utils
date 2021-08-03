const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: 'web',
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  optimization: {},
  externals: {},
};
