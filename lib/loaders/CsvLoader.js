'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let CsvLoader = class CsvLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'csv-loader';
    this.addDependency();
  }
};
exports.default = CsvLoader;
;
module.exports = exports.default;