'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

var _Mod = require('./Mod');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  config: _config2.default,
  WebpackConfig: _WebpackConfig2.default,
  Mod: _Mod.Mod,
  Plugin: _Mod.Plugin
};
module.exports = exports.default;