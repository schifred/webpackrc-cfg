'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _exec = require('./utils/exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let Plugin = class Plugin {
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

  get Constructor() {
    const [moduleName, ...methodNames] = this._mod.split('.');
    let Func = require(moduleName);
    let i = 0;

    while (i < methodNames.length) {
      const methodName = methodNames[i];
      if (methodName) Func = Func[methodName];
      i++;
    };

    return Func;
  }

  get plugin() {
    const Func = this.Constructor;
    return new Func(this._options);
  }
};
exports.default = Plugin;
;
module.exports = exports.default;