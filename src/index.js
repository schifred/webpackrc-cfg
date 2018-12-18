import webpack from 'webpack';
import { config } from './apis/config';
import WebpackConfig from './apis/WebpackConfig';
import getWebpackConfig from './apis/getWebpackConfig';
import { install, installDependencies } from './depend';

export default {
  webpack,
  config,
  WebpackConfig,
  getWebpackConfig,
  installDependencies,
  install
};