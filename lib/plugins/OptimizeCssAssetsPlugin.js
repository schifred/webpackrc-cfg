'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let OptimizeCssAssetsPlugin = class OptimizeCssAssetsPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'optimize-css-assets-webpack-plugin', _temp;
  }

};
exports.default = OptimizeCssAssetsPlugin;
;
module.exports = exports.default;