'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let HtmlWebpackPlugin = class HtmlWebpackPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'html-webpack-plugin';
    this.addDependency();
  }
};
exports.default = HtmlWebpackPlugin;
;
module.exports = exports.default;