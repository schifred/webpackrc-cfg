'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Plugin = require('../Plugin');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CleanPlugin = class CleanPlugin extends _Plugin2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'clean-webpack-plugin', _temp;
  }

};
exports.default = CleanPlugin;
;
module.exports = exports.default;