'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CleanPlugin = class CleanPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'clean-webpack-plugin', _temp;
  }

};
exports.default = CleanPlugin;
;
module.exports = exports.default;