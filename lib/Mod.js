'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = exports.Mod = undefined;

var _config = require('./config');

var _dependency = require('./dependency');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let AbstractMod = class AbstractMod {
  constructor(opts = {}) {
    this.mod = '';
    this.opts = opts;
  }

  get buildin() {
    return _config.buildin;
  }

  addDependency() {
    (0, _dependency.addDependency)(this.dependencies);
  }

  get dependencies() {
    return this.mod;
  }

  install() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const dependencies = Array.isArray(_this.dependencies) ? _this.dependencies : [_this.dependencies];
      for (let i = 0; i < dependencies.length; i++) {
        const [moduleName] = dependencies[i].split('.');
        yield AbstractMod.install(moduleName);
      };
    })();
  }
};
let Mod = exports.Mod = class Mod extends AbstractMod {
  get module() {
    return this.buildin ? require.resolve(this.mod) : this.mod;
  }

  get options() {
    return this.transform ? this.transform(this.opts) : this.opts;
  }
};
;

let Plugin = exports.Plugin = class Plugin extends AbstractMod {
  get Constructor() {
    const [moduleName, ...methodNames] = this.mod.split('.');
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
    return new Func(this.opts);
  }
};
;