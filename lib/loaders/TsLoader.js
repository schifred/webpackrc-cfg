'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

let TsLoader = class TsLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'ts-loader';
    this.opts = _extends({
      transpileOnly: true
    }, opts);
  }
};
exports.default = TsLoader;
;
module.exports = exports.default;