const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./index.js'],
  },
  mode: process.env.NODE_ENV || 'none',
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
