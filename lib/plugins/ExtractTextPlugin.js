'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Plugin = require('../Plugin');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ExtractTextPlugin = class ExtractTextPlugin extends _Plugin2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'extract-text-webpack-plugin', _temp;
  }

};
exports.default = ExtractTextPlugin;
;
module.exports = exports.default;