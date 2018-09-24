'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _eslintFormatter = require('react-dev-utils/eslintFormatter');

var _eslintFormatter2 = _interopRequireDefault(_eslintFormatter);

var _Mod = require('../Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EslintLoader = class EslintLoader extends _Mod2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'eslint-loader', this._options = {
      fix: false, // 自动修改源码中的语法错误
      formatter: _eslintFormatter2.default, // 转换校验结果
      eslintPath: require.resolve('eslint') // eslint 实例路径，指向 eslint 模块
    }, _temp;
  }

};
exports.default = EslintLoader;
;
module.exports = exports.default;