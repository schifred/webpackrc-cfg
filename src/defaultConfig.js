import WebpackConfig from './WebpackConfig';

let defaultConfig = new WebpackConfig();

defaultConfig.mode = 'development';
defaultConfig.context = 'development';

defaultConfig.optimization = {
  removeAvailableModules: true,
  removeEmptyChunks: true,
  mergeDuplicateChunks: true,
  minimize: isBuild ? true : false
};