'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let FileLoader = class FileLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'file-loader';
    this.addDependency();
  }
};
exports.default = FileLoader;
;
module.exports = exports.default;