'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let EnvironmentPlugin = class EnvironmentPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'webpack.EnvironmentPlugin', _temp;
  }

};
exports.default = EnvironmentPlugin;
;
module.exports = exports.default;