'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let JsonLoader = class JsonLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'json-loader';
    this.addDependency();
  }
};
exports.default = JsonLoader;
;
module.exports = exports.default;