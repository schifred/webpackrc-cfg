'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Mod = require('../Mod');

let OccurrenceOrderPlugin = class OccurrenceOrderPlugin extends _Mod.Plugin {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'webpack.optimize.OccurrenceOrderPlugin';
    this.addDependency();
  }
};
exports.default = OccurrenceOrderPlugin;
;
module.exports = exports.default;