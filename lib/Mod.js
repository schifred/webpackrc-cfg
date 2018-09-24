'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _exec = require('./utils/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let Mod = class Mod {
  static install(name) {
    return _asyncToGenerator(function* () {
      console.info(`Installing ${name} ...`);
      return yield (0, _exec2.default)(`npm i ${name}`);
    })();
  }

  constructor(opts = {}) {
    this.buildin = false;

    const { buildin } = opts;
    this.buildin = buildin;
  }

  get mod() {
    return this._buildin ? require.resolve(this._mod) : this._mod;
  }

  get options() {
    return this.transform ? this.transform(this._options) : this._options;
  }
};
exports.default = Mod;
;
module.exports = exports.default;