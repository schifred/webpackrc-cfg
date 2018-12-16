import { config } from './apis/config';
import WebpackConfig from './apis/WebpackConfig';
import getWebpackConfig from './apis/getWebpackConfig';
import { install, installDependencies } from './depend';

export default {
  config,
  WebpackConfig,
  getWebpackConfig,
  installDependencies,
  install
};