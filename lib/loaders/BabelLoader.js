'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class13, _temp14;

var _Mod = require('../Mod');

var _Mod2 = _interopRequireDefault(_Mod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Babel_Preset_Env = class Babel_Preset_Env extends _Mod2.default {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mod = 'babel-preset-env', this._options = {
      targets: {
        browsers: ['last 2 versions', 'IE >= 9'],
        uglify: true
      },
      include: [],
      exclude: [],
      loose: true,
      modules: 'commonjs',
      useBuiltIns: 'usage',
      spec: false,
      debug: undefined
    }, _temp;
  }

};
;

let Babel_Preset_Stage_0 = class Babel_Preset_Stage_0 extends _Mod2.default {
  constructor(...args) {
    var _temp2;

    return _temp2 = super(...args), this._mod = 'babel-preset-stage-0', _temp2;
  }

};
;

let Babel_Preset_React = class Babel_Preset_React extends _Mod2.default {
  constructor(...args) {
    var _temp3;

    return _temp3 = super(...args), this._mod = 'babel-preset-react', _temp3;
  }

};
;

let Babel_Preset_Flow = class Babel_Preset_Flow extends _Mod2.default {
  constructor(...args) {
    var _temp4;

    return _temp4 = super(...args), this._mod = 'babel-preset-flow', _temp4;
  }

};
;

let Babel_Plugin_Transform_Runtime = class Babel_Plugin_Transform_Runtime extends _Mod2.default {
  constructor(...args) {
    var _temp5;

    return _temp5 = super(...args), this._mod = 'babel-plugin-transform-runtime', this._options = {
      'helpers': true,
      'polyfill': true,
      'regenerator': true,
      'moduleName': 'babel-runtime',
      'useBuiltIns': false
    }, _temp5;
  }

};
;

let Babel_Plugin_Add_Module_Exports = class Babel_Plugin_Add_Module_Exports extends _Mod2.default {
  constructor(...args) {
    var _temp6;

    return _temp6 = super(...args), this._mod = 'babel-plugin-add-module-exports', _temp6;
  }

};
;

let Babel_Plugin_Syntax_Dynamic_Import = class Babel_Plugin_Syntax_Dynamic_Import extends _Mod2.default {
  constructor(...args) {
    var _temp7;

    return _temp7 = super(...args), this._mod = 'babel-plugin-syntax-dynamic-import', _temp7;
  }

};
;

let Babel_Plugin_Typecheck = class Babel_Plugin_Typecheck extends _Mod2.default {
  constructor(...args) {
    var _temp8;

    return _temp8 = super(...args), this._mod = 'babel-plugin-typecheck', _temp8;
  }

};
;

let Babel_Plugin_Transform_Decorators_Legacy = class Babel_Plugin_Transform_Decorators_Legacy extends _Mod2.default {
  constructor(...args) {
    var _temp9;

    return _temp9 = super(...args), this._mod = 'babel-plugin-transform-decorators-legacy', _temp9;
  }

};
;

let Babel_Plugin_Transform_Remove_Strict_Mode = class Babel_Plugin_Transform_Remove_Strict_Mode extends _Mod2.default {
  constructor(...args) {
    var _temp10;

    return _temp10 = super(...args), this._mod = 'babel-plugin-transform-remove-strict-mode', _temp10;
  }

};
;

let Babel_Plugin_React_Require = class Babel_Plugin_React_Require extends _Mod2.default {
  constructor(...args) {
    var _temp11;

    return _temp11 = super(...args), this._mod = 'babel-plugin-react-require', _temp11;
  }

};
;

let Babel_Plugin_Import = class Babel_Plugin_Import extends _Mod2.default {
  constructor(...args) {
    var _temp12;

    return _temp12 = super(...args), this._mod = 'babel-plugin-import', _temp12;
  }

};
;

let BabelLoader = (_temp14 = _class13 = class BabelLoader extends _Mod2.default {
  constructor(...args) {
    var _temp13;

    return _temp13 = super(...args), this._mod = 'babel-loader', this._options = {
      babelrc: true,
      presets: [BabelLoader.babel_preset_env, BabelLoader.babel_preset_stage_0],
      plugins: [BabelLoader.babel_plugin_transform_runtime, BabelLoader.babel_plugin_transform_decorators_legacy, BabelLoader.babel_plugin_add_module_exports],
      cacheDirectory: true // 缓存babel-loader编译结果 
    }, _temp13;
  }

  // 注入最新的 api

  // common.js 模块加载，无需 default

  // import 动态加载模块

  // flow 的类型注释转换

  // 装饰器语法转换

  // 移除 strict mode

  // JSX 语法自动加载 react

  // 加载样式等模块


  transform() {
    const { presets, plugins } = this._options;
    let _presets = [];
    let _plugins = [];

    presets.map(preset => {
      if (!(preset instanceof _Mod2.default)) return preset;
      if (preset.mod) _presets.push(preset.mod);
      if (preset.options) _presets.push(preset.options);
    });

    plugins.map(plugin => {
      if (!(plugin instanceof _Mod2.default)) return plugin;
      if (plugin.mod) _plugins.push(plugin.mod);
      if (plugin.options) _plugins.push(plugin.options);
    });

    return _extends({}, this._options, {
      presets: _presets,
      plugins: _plugins
    });
  }
}, _class13.babel_preset_env = new Babel_Preset_Env(), _class13.babel_preset_stage_0 = new Babel_Preset_Stage_0(), _class13.babel_preset_react = new Babel_Preset_React(), _class13.babel_preset_flow = new Babel_Preset_Flow(), _class13.babel_plugin_transform_runtime = new Babel_Plugin_Transform_Runtime(), _class13.babel_plugin_add_module_exports = new Babel_Plugin_Add_Module_Exports(), _class13.babel_plugin_syntax_dynamic_import = new Babel_Plugin_Syntax_Dynamic_Import(), _class13.babel_plugin_typecheck = new Babel_Plugin_Typecheck(), _class13.babel_plugin_transform_decorators_legacy = new Babel_Plugin_Transform_Decorators_Legacy(), _class13.babel_plugin_transform_remove_strict_mode = new Babel_Plugin_Transform_Remove_Strict_Mode(), _class13.babel_plugin_react_require = new Babel_Plugin_React_Require(), _class13.babel_plugin_import = new Babel_Plugin_Import(), _temp14);
exports.default = BabelLoader;
;
module.exports = exports.default;