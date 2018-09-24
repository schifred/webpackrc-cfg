'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let TsLoader = class TsLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'ts-loader';
    this.opts = _extends({
      transpileOnly: true
    }, opts);
  }

  install() {
    return _asyncToGenerator(function* () {
      yield _Mod.Mod.install('ts-loader');
    })();
  }
};
exports.default = TsLoader;
;
module.exports = exports.default;