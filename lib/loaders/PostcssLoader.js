'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let PostcssLoader = class PostcssLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      plugins: [require('autoprefixer')()]
    };
    this.init();
  }

  get dependencies() {
    return [this.mod, 'autoprefixer'];
  }
};
exports.default = PostcssLoader;
;
module.exports = exports.default;