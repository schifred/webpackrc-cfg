import { config } from './config';
import WebpackConfig from './WebpackConfig';
import { Mod, Plugin } from './Mod';
import loaders from './loaders';
import plugins from './plugins';
import getDefaultConfig from './getDefaultConfig';
import { installDependency } from './dependency';

export default {
  config,
  WebpackConfig,
  Mod,
  Plugin,
  loaders,
  plugins,
  getDefaultConfig,
  installDependency
};