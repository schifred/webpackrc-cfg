'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let SassLoader = class SassLoader extends _Mod.Mod {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'sass-loader', _temp;
  }

};
exports.default = SassLoader;
;
module.exports = exports.default;