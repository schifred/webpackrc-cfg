'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

let LessLoader = class LessLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'less-loader';
    this.opts = _extends({
      javascriptEnabled: true, // 不加会报错 Inline JavaScript is not enabled. Is it set in your options?
      lint: false
    }, opts);
    this.addDependency();
  }
};
exports.default = LessLoader;
;
module.exports = exports.default;