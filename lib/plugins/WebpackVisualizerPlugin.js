'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let WebpackVisualizerPlugin = class WebpackVisualizerPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'webpack-visualizer-plugin';
    this.init();
  }
};
exports.default = WebpackVisualizerPlugin;
;
module.exports = exports.default;