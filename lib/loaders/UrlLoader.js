'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

let UrlLoader = class UrlLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'url-loader';
    this.opts = _extends({
      limit: 8192
    }, opts);
    this.addDependency();
  }
};
exports.default = UrlLoader;
;
module.exports = exports.default;