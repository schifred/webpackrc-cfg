'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let OptimizeCssAssetsPlugin = class OptimizeCssAssetsPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'optimize-css-assets-webpack-plugin';
    this.addDependency();
  }
};
exports.default = OptimizeCssAssetsPlugin;
;
module.exports = exports.default;