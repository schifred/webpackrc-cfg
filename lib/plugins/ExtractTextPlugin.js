'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let ExtractTextPlugin = class ExtractTextPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'extract-text-webpack-plugin';
    this.addDependency();
  }
};
exports.default = ExtractTextPlugin;
;
module.exports = exports.default;