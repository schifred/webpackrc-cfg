'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let XmlLoader = class XmlLoader extends _Mod.Mod {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'xml-loader', _temp;
  }

  install() {
    return _asyncToGenerator(function* () {
      yield _Mod.Mod.install('xml-loader');
    })();
  }
};
exports.default = XmlLoader;
;
module.exports = exports.default;