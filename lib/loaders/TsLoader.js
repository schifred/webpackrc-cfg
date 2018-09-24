'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let TsLoader = class TsLoader extends _Mod2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'ts-loader', this._options = {
      transpileOnly: true
    }, _temp;
  }

};
exports.default = TsLoader;
;
module.exports = exports.default;