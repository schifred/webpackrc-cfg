'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class13, _temp11;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Mod = require('../Mod');

let Babel_Preset_Env = class Babel_Preset_Env extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-preset-env';
    this.opts = _extends({
      targets: {
        browsers: ['last 2 versions', 'IE >= 9'],
        uglify: true
      },
      loose: true,
      useBuiltIns: 'usage'
    }, opts);
  }
};
;

let Babel_Preset_Stage_0 = class Babel_Preset_Stage_0 extends _Mod.Mod {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.mod = 'babel-preset-stage-0', _temp;
  }

};
;

let Babel_Preset_React = class Babel_Preset_React extends _Mod.Mod {
  constructor(...args) {
    var _temp2;

    return _temp2 = super(...args), this.mod = 'babel-preset-react', _temp2;
  }

};
;

let Babel_Preset_Flow = class Babel_Preset_Flow extends _Mod.Mod {
  constructor(...args) {
    var _temp3;

    return _temp3 = super(...args), this.mod = 'babel-preset-flow', _temp3;
  }

};
;

let Babel_Plugin_Transform_Runtime = class Babel_Plugin_Transform_Runtime extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-transform-runtime';
    this.opts = _extends({
      'helpers': true,
      'polyfill': true,
      'regenerator': true,
      'moduleName': 'babel-runtime',
      'useBuiltIns': false
    }, opts);
  }
};
;

let Babel_Plugin_Add_Module_Exports = class Babel_Plugin_Add_Module_Exports extends _Mod.Mod {
  constructor(...args) {
    var _temp4;

    return _temp4 = super(...args), this.mod = 'babel-plugin-add-module-exports', _temp4;
  }

};
;

let Babel_Plugin_Syntax_Dynamic_Import = class Babel_Plugin_Syntax_Dynamic_Import extends _Mod.Mod {
  constructor(...args) {
    var _temp5;

    return _temp5 = super(...args), this.mod = 'babel-plugin-syntax-dynamic-import', _temp5;
  }

};
;

let Babel_Plugin_Typecheck = class Babel_Plugin_Typecheck extends _Mod.Mod {
  constructor(...args) {
    var _temp6;

    return _temp6 = super(...args), this.mod = 'babel-plugin-typecheck', _temp6;
  }

};
;

let Babel_Plugin_Transform_Decorators_Legacy = class Babel_Plugin_Transform_Decorators_Legacy extends _Mod.Mod {
  constructor(...args) {
    var _temp7;

    return _temp7 = super(...args), this.mod = 'babel-plugin-transform-decorators-legacy', _temp7;
  }

};
;

let Babel_Plugin_Transform_Remove_Strict_Mode = class Babel_Plugin_Transform_Remove_Strict_Mode extends _Mod.Mod {
  constructor(...args) {
    var _temp8;

    return _temp8 = super(...args), this.mod = 'babel-plugin-transform-remove-strict-mode', _temp8;
  }

};
;

let Babel_Plugin_React_Require = class Babel_Plugin_React_Require extends _Mod.Mod {
  constructor(...args) {
    var _temp9;

    return _temp9 = super(...args), this.mod = 'babel-plugin-react-require', _temp9;
  }

};
;

let Babel_Plugin_Import = class Babel_Plugin_Import extends _Mod.Mod {
  constructor(...args) {
    var _temp10;

    return _temp10 = super(...args), this.mod = 'babel-plugin-import', _temp10;
  }

};
;

let BabelLoader = (_temp11 = _class13 = class BabelLoader extends _Mod.Mod {
  // 加载样式等模块

  // 移除 strict mode

  // flow 的类型注释转换

  // common.js 模块加载，无需 default
  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-loader';
    this.opts = _extends({
      babelrc: true,
      presets: [BabelLoader.babel_preset_env, BabelLoader.babel_preset_stage_0],
      plugins: [BabelLoader.babel_plugin_transform_runtime, BabelLoader.babel_plugin_transform_decorators_legacy, BabelLoader.babel_plugin_add_module_exports],
      cacheDirectory: true }, opts);
  }
  // JSX 语法自动加载 react

  // 装饰器语法转换

  // import 动态加载模块


  // 注入最新的 api


  transform() {
    const { presets, plugins } = this.opts;
    let _presets = [];
    let _plugins = [];

    presets.map(preset => {
      if (!(preset instanceof _Mod.Mod)) return preset;
      if (preset.mod) _presets.push(preset.mod);
      if (preset.options) _presets.push(preset.options);
    });

    plugins.map(plugin => {
      if (!(plugin instanceof _Mod.Mod)) return plugin;
      if (plugin.mod) _plugins.push(plugin.mod);
      if (plugin.options) _plugins.push(plugin.options);
    });

    return _extends({}, this.opts, {
      presets: _presets,
      plugins: _plugins
    });
  }

  get dependencies() {
    return [this.mod, ...this.opts.presets.map(preset => preset.mod), ...this.opts.plugins.map(plugin => plugin.mod)];
  }
}, _class13.babel_preset_env = new Babel_Preset_Env(), _class13.babel_preset_stage_0 = new Babel_Preset_Stage_0(), _class13.babel_preset_react = new Babel_Preset_React(), _class13.babel_preset_flow = new Babel_Preset_Flow(), _class13.babel_plugin_transform_runtime = new Babel_Plugin_Transform_Runtime(), _class13.babel_plugin_add_module_exports = new Babel_Plugin_Add_Module_Exports(), _class13.babel_plugin_syntax_dynamic_import = new Babel_Plugin_Syntax_Dynamic_Import(), _class13.babel_plugin_typecheck = new Babel_Plugin_Typecheck(), _class13.babel_plugin_transform_decorators_legacy = new Babel_Plugin_Transform_Decorators_Legacy(), _class13.babel_plugin_transform_remove_strict_mode = new Babel_Plugin_Transform_Remove_Strict_Mode(), _class13.babel_plugin_react_require = new Babel_Plugin_React_Require(), _class13.babel_plugin_import = new Babel_Plugin_Import(), _temp11);
exports.default = BabelLoader;
;
module.exports = exports.default;