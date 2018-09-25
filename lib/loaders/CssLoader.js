'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CssLoader = class CssLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      modules: true,
      camelCase: true
    };
    this.init();
  }
};
exports.default = CssLoader;
;
module.exports = exports.default;