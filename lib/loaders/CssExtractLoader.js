'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CssExtractLoader = class CssExtractLoader extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.init();
  }

  get dependencies() {
    return ['mini-css-extract-plugin'];
  }
};
exports.default = CssExtractLoader;
;
module.exports = exports.default;