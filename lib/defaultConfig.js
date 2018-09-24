'use strict';

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let defaultConfig = new _WebpackConfig2.default();

defaultConfig.mode = 'development';
defaultConfig.context = 'development';

defaultConfig.optimization = {
  removeAvailableModules: true,
  removeEmptyChunks: true,
  mergeDuplicateChunks: true,
  minimize: isBuild ? true : false
};