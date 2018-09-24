'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let VisualizerPlugin = class VisualizerPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'webpack-visualizer-plugin';
    this.addDependency();
  }
};
exports.default = VisualizerPlugin;
;
module.exports = exports.default;