'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let LessLoader = class LessLoader extends _Mod2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'less-loader', this._options = {
      javascriptEnabled: true, // 不加会报错 Inline JavaScript is not enabled. Is it set in your options?
      lint: false
    }, _temp;
  }

};
exports.default = LessLoader;
;
module.exports = exports.default;