'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let SassLoader = class SassLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'sass-loader';
    this.addDependency();
  }
};
exports.default = SassLoader;
;
module.exports = exports.default;