'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CleanPlugin = class CleanPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'clean-webpack-plugin';
    this.addDependency();
  }
};
exports.default = CleanPlugin;
;
module.exports = exports.default;