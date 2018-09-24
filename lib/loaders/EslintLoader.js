'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let EslintLoader = class EslintLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'eslint-loader';
    this.opts = _extends({
      fix: false, // 自动修改源码中的语法错误
      formatter: require('react-dev-utils/eslintFormatter'), // 转换校验结果
      eslintPath: require.resolve('eslint') }, opts);
  }

  install() {
    return _asyncToGenerator(function* () {
      yield _Mod.Mod.install('eslint');
      yield _Mod.Mod.install('eslint-loader');
      yield _Mod.Mod.install('react-dev-utils');
    })();
  }
};
exports.default = EslintLoader;
;
module.exports = exports.default;