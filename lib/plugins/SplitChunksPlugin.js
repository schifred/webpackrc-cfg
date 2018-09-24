'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let SplitChunksPlugin = class SplitChunksPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'webpack.optimize.SplitChunksPlugin';
    this.addDependency();
  }
};
exports.default = SplitChunksPlugin;
;
module.exports = exports.default;