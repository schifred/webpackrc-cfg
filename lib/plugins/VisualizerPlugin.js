'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let VisualizerPlugin = class VisualizerPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'webpack-visualizer-plugin', _temp;
  }

};
exports.default = VisualizerPlugin;
;
module.exports = exports.default;