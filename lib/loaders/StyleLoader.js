'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let StyleLoader = class StyleLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'style-loader';
    this.addDependency();
  }
};
exports.default = StyleLoader;
;
module.exports = exports.default;