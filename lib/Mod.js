'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = exports.Mod = undefined;

var _class, _temp, _class2, _temp2;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _exec = require('./utils/exec');

var _exec2 = _interopRequireDefault(_exec);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let AbstractMod = class AbstractMod {
  static install(name) {
    return _asyncToGenerator(function* () {
      if (!name) return;

      // const modulePath = path.resolve(process.cwd, `./node_modules/${name}`);

      console.info(`Installing ${name} ...`);
      // if ( !fs.existsSync(modulePath) ) 
      yield (0, _exec2.default)(`${_config.npm} install ${name}`, {
        save: !!_config.buildin
      });
      console.info('Done');
    })();
  }

  constructor(opts = {}) {
    this.mod = '';
    this.opts = opts;
  }

  get buildin() {
    return _config.buildin;
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
let Mod = exports.Mod = (_temp = _class = class Mod extends AbstractMod {

  get module() {
    return this.buildin ? require.resolve(this.mod) : this.mod;
  }

  get options() {
    return this.transform ? this.transform(this.opts) : this.opts;
  }
}, _class.install = AbstractMod.install, _temp);
;

let Plugin = exports.Plugin = (_temp2 = _class2 = class Plugin extends AbstractMod {

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
}, _class2.install = AbstractMod.install, _temp2);
;