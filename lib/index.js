'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

var _Mod = require('./Mod');

var _loaders = require('./loaders');

var _loaders2 = _interopRequireDefault(_loaders);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  config: _config2.default,
  WebpackConfig: _WebpackConfig2.default,
  Mod: _Mod.Mod,
  Plugin: _Mod.Plugin,
  loaders: _loaders2.default,
  plugins: _plugins2.default
};
module.exports = exports.default;