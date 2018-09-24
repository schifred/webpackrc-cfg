'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let SplitChunksPlugin = class SplitChunksPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'webpack.optimize.SplitChunksPlugin', _temp;
  }

};
exports.default = SplitChunksPlugin;
;
module.exports = exports.default;