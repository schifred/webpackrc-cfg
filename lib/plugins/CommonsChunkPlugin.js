'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CommonsChunkPlugin = class CommonsChunkPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'webpack.optimize.CommonsChunkPlugin';
    this.init();
  }
};
exports.default = CommonsChunkPlugin;
;
module.exports = exports.default;