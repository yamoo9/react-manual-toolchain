const { merge } = require('webpack-merge');
const { resolve } = require('node:path');
const commonConfig = require('./common');

const buildConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: resolve(__dirname, '../build'), 
    filename: '[name].min.js',
  }
});

module.exports = buildConfig;