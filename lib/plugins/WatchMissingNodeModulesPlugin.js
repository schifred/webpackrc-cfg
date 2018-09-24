'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Plugin = require('../Plugin');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let WatchMissingNodeModulesPlugin = class WatchMissingNodeModulesPlugin extends _Plugin2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'react-dev-utils/WatchMissingNodeModulesPlugin', _temp;
  }

};
exports.default = WatchMissingNodeModulesPlugin;
;
module.exports = exports.default;