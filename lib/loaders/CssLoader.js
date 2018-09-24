'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CssLoader = class CssLoader extends _Mod2.default {

  constructor(opts) {
    super(opts);
    this._mod = 'css-loader';
    this._options = {
      modules: true,
      camelCase: true
    };
    _Mod2.default.install('css-loader');
  }
};
exports.default = CssLoader;
;
module.exports = exports.default;