'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = exports.Mod = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _config = require('./config');

var _dependency = require('./dependency');

let AbstractMod = class AbstractMod {
  constructor() {
    this.addDependency = _dependency.addDependency;
    this.removeDependency = _dependency.removeDependency;
    this.transformDependencyName = _dependency.transformDependencyName;
  }

  get buildin() {
    return _config.buildin;
  }

  get dependencies() {
    return this.mod;
  }
};
;

let Mod = exports.Mod = class Mod extends AbstractMod {
  constructor(opts = {}) {
    super(opts);
    this.mod = this.transformDependencyName(this.constructor.name);
    this.opts = opts;
    this.init();
  }

  init() {
    this.opts = _extends({}, this.defaultOptions || {}, this.opts || {});
    if (!Object.keys(this.opts).length) {
      this.opts = undefined;
    };

    // 依赖管理
    this.removeDependency(this.transformDependencyName(this.constructor.name));
    this.addDependency(this.dependencies);
  }

  get module() {
    return this.buildin ? require.resolve(this.mod) : this.mod;
  }

  get options() {
    return this.transform ? this.transform(this.opts) : this.opts;
  }

  getOptions(opts = {}) {
    return this.transform ? this.transform(_extends({}, this.opts, opts)) : _extends({}, this.opts, opts);
  }
};
;

let Plugin = exports.Plugin = class Plugin extends AbstractMod {
  constructor(opts) {
    super(opts);
    this.mod = this.transformDependencyName(this.constructor.name);
    this.opts = opts;
    this.init();
  }

  init() {
    this.opts = this.defaultOptions ? _extends({}, this.defaultOptions || {}, this.opts || {}) : this.opts;
    // 依赖管理
    this.removeDependency(this.transformDependencyName(this.constructor.name));
    this.addDependency(this.dependencies);
  }

  get Plugin() {
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
    const Func = this.Plugin;
    return new Func(this.opts);
  }

  getPlugin(arg1, arg2, arg3, arg4) {
    const Func = this.Plugin;
    return new Func(this.opts && typeof arg1 === 'object' ? _extends({}, this.opts, arg1) : arg1, arg2, arg3, arg4);
  }
};
;