'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let EjsLoader = class EjsLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'ejs-loader';
    this.addDependency();
  }
};
exports.default = EjsLoader;
;
module.exports = exports.default;