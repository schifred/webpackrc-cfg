'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let XmlLoader = class XmlLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'xml-loader';
    this.addDependency();
  }
};
exports.default = XmlLoader;
;
module.exports = exports.default;