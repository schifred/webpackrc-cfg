'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let EslintLoader = class EslintLoader extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.init();
  }

  get dependencies() {
    return [this.mod, 'eslint', 'eslint-config-react-app', 'eslint-plugin-flowtype', 'eslint-plugin-jsx-a11y', 'eslint-plugin-react', 'eslint-plugin-import'];
  }
};
exports.default = EslintLoader;
;
module.exports = exports.default;