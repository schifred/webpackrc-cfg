'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let HtmlLoader = class HtmlLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'html-loader';
    this.addDependency();
  }
};
exports.default = HtmlLoader;
;
module.exports = exports.default;