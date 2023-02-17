const { merge } = require('webpack-merge');
const { resolve } = require('node:path');
const commonConfig = require('./common');
const serverOptions = require('./server');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: serverOptions,
  output: {
    path: resolve(__dirname, '../public'), 
    filename: '[name].bundle.js',
  }
});

module.exports = devConfig;