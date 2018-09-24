'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let WatchMissingNodeModulesPlugin = class WatchMissingNodeModulesPlugin extends _Mod.Plugin {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'react-dev-utils/WatchMissingNodeModulesPlugin', _temp;
  }

};
exports.default = WatchMissingNodeModulesPlugin;
;
module.exports = exports.default;