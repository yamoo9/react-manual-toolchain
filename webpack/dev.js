const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const { resolve } = require('node:path');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    path: resolve(__dirname, '../public'), 
    filename: '[name].bundle.js',
  }
});

module.exports = devConfig;