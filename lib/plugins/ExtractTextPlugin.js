'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let ExtractTextPlugin = class ExtractTextPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'extract-text-webpack-plugin', _temp;
  }

};
exports.default = ExtractTextPlugin;
;
module.exports = exports.default;