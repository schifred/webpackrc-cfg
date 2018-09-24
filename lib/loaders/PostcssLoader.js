'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

let PostcssLoader = class PostcssLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'postcss-loader';
    this.opts = _extends({
      plugins: [require('autoprefixer')()]
    }, opts);
  }

  get dependencies() {
    return [this.mod, 'autoprefixer'];
  }
};
exports.default = PostcssLoader;
;
module.exports = exports.default;