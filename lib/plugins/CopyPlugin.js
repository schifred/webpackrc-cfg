'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CopyPlugin = class CopyPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'copy-webpack-plugin', _temp;
  }

};
exports.default = CopyPlugin;
;
module.exports = exports.default;