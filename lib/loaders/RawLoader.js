'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let RawLoader = class RawLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'raw-loader';
    this.addDependency();
  }
};
exports.default = RawLoader;
;
module.exports = exports.default;