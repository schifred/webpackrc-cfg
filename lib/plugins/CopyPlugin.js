'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CopyPlugin = class CopyPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'copy-webpack-plugin';
    this.addDependency();
  }
};
exports.default = CopyPlugin;
;
module.exports = exports.default;