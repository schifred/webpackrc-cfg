'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class3, _temp;

var _Mod = require('../Mod');

let Babel_Preset_Env = class Babel_Preset_Env extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      targets: {
        browsers: ['last 2 versions', 'IE >= 9'],
        uglify: true
      },
      loose: true,
      useBuiltIns: 'usage'
    };
    this.mod = '@babel/preset-env';
    this.init();
  }
};
;

let Babel_Preset_Stage_0 = class Babel_Preset_Stage_0 extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/preset-stage-0';
    this.init();
  }
};
;
let Babel_Preset_React = class Babel_Preset_React extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/preset-react';
    this.init();
  }
};
;
let Babel_Preset_Flow = class Babel_Preset_Flow extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/preset-flow';
    this.init();
  }
};
;

// 注入最新的 api
let Babel_Plugin_Transform_Runtime = class Babel_Plugin_Transform_Runtime extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      'helpers': true,
      'polyfill': true,
      'regenerator': true,
      'moduleName': 'babel-runtime',
      'useBuiltIns': false
    };
    this.mod = '@babel/preset-transform-runtime';
    this.init();
  }
};
;
// common.js 模块加载，无需 default
let Babel_Plugin_Add_Module_Exports = class Babel_Plugin_Add_Module_Exports extends _Mod.Mod {};
;
// import 动态加载模块
let Babel_Plugin_Syntax_Dynamic_Import = class Babel_Plugin_Syntax_Dynamic_Import extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/preset-syntax-dynamic-import';
    this.init();
  }
};
;
// flow 的类型注释转换
let Babel_Plugin_Typecheck = class Babel_Plugin_Typecheck extends _Mod.Mod {};
;
// 装饰器语法转换
let Babel_Plugin_Transform_Decorators_Legacy = class Babel_Plugin_Transform_Decorators_Legacy extends _Mod.Mod {};
;
// 移除 strict mode
let Babel_Plugin_Transform_Remove_Strict_Mode = class Babel_Plugin_Transform_Remove_Strict_Mode extends _Mod.Mod {};
;
// JSX 语法自动加载 react
let Babel_Plugin_React_Require = class Babel_Plugin_React_Require extends _Mod.Mod {};
;
// 加载样式等模块
let Babel_Plugin_Import = class Babel_Plugin_Import extends _Mod.Mod {};
;

let BabelLoader = (_temp = _class3 = class BabelLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      babelrc: true,
      presets: [new BabelLoader.Babel_Preset_Env(), new BabelLoader.Babel_Preset_Stage_0()],
      plugins: [new BabelLoader.Babel_Plugin_Transform_Runtime(), new BabelLoader.Babel_Plugin_Transform_Decorators_Legacy(), new BabelLoader.Babel_Plugin_Add_Module_Exports()],
      cacheDirectory: true // 缓存babel-loader编译结果 
    };
    this.init();
  }

  get dependencies() {
    return ['@babel/core', this.mod];
  }

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
}, _class3.Babel_Preset_Env = Babel_Preset_Env, _class3.Babel_Preset_Stage_0 = Babel_Preset_Stage_0, _class3.Babel_Preset_React = Babel_Preset_React, _class3.Babel_Preset_Flow = Babel_Preset_Flow, _class3.Babel_Plugin_Transform_Runtime = Babel_Plugin_Transform_Runtime, _class3.Babel_Plugin_Add_Module_Exports = Babel_Plugin_Add_Module_Exports, _class3.Babel_Plugin_Syntax_Dynamic_Import = Babel_Plugin_Syntax_Dynamic_Import, _class3.Babel_Plugin_Typecheck = Babel_Plugin_Typecheck, _class3.Babel_Plugin_Transform_Decorators_Legacy = Babel_Plugin_Transform_Decorators_Legacy, _class3.Babel_Plugin_Transform_Remove_Strict_Mode = Babel_Plugin_Transform_Remove_Strict_Mode, _class3.Babel_Plugin_React_Require = Babel_Plugin_React_Require, _class3.Babel_Plugin_Import = Babel_Plugin_Import, _temp);
exports.default = BabelLoader;
;
module.exports = exports.default;