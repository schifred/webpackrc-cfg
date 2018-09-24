'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class13, _temp;

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
    this.addDependency();
  }
};
;

let Babel_Preset_Stage_0 = class Babel_Preset_Stage_0 extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-preset-stage-0';
    this.addDependency();
  }
};
;

let Babel_Preset_React = class Babel_Preset_React extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-preset-react';
    this.addDependency();
  }
};
;

let Babel_Preset_Flow = class Babel_Preset_Flow extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-preset-flow';
    this.addDependency();
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
    this.addDependency();
  }
};
;

let Babel_Plugin_Add_Module_Exports = class Babel_Plugin_Add_Module_Exports extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-add-module-exports';
    this.addDependency();
  }
};
;

let Babel_Plugin_Syntax_Dynamic_Import = class Babel_Plugin_Syntax_Dynamic_Import extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-syntax-dynamic-import';
    this.addDependency();
  }
};
;

let Babel_Plugin_Typecheck = class Babel_Plugin_Typecheck extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-typecheck';
    this.addDependency();
  }
};
;

let Babel_Plugin_Transform_Decorators_Legacy = class Babel_Plugin_Transform_Decorators_Legacy extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-transform-decorators-legacy';
    this.addDependency();
  }
};
;

let Babel_Plugin_Transform_Remove_Strict_Mode = class Babel_Plugin_Transform_Remove_Strict_Mode extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-transform-remove-strict-mode';
    this.addDependency();
  }
};
;

let Babel_Plugin_React_Require = class Babel_Plugin_React_Require extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-react-require';
    this.addDependency();
  }
};
;

let Babel_Plugin_Import = class Babel_Plugin_Import extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-plugin-import';
    this.addDependency();
  }
};
;

let BabelLoader = (_temp = _class13 = class BabelLoader extends _Mod.Mod {
  // 加载样式等模块

  // 移除 strict mode

  // flow 的类型注释转换

  // common.js 模块加载，无需 default
  constructor(opts = {}) {
    super(opts);
    this.mod = 'babel-loader';
    this.opts = _extends({
      babelrc: true,
      presets: [new BabelLoader.Babel_Preset_Env(), new BabelLoader.Babel_Preset_Stage_0()],
      plugins: [new BabelLoader.Babel_Plugin_Transform_Runtime(), new BabelLoader.Babel_Plugin_Transform_Decorators_Legacy(), new BabelLoader.Babel_Plugin_Add_Module_Exports()],
      cacheDirectory: true }, opts);
    this.addDependency();
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
}, _class13.Babel_Preset_Env = Babel_Preset_Env, _class13.Babel_Preset_Stage_0 = Babel_Preset_Stage_0, _class13.Babel_Preset_React = Babel_Preset_React, _class13.Babel_Preset_Flow = Babel_Preset_Flow, _class13.Babel_Plugin_Transform_Runtime = Babel_Plugin_Transform_Runtime, _class13.Babel_Plugin_Add_Module_Exports = Babel_Plugin_Add_Module_Exports, _class13.Babel_Plugin_Syntax_Dynamic_Import = Babel_Plugin_Syntax_Dynamic_Import, _class13.Babel_Plugin_Typecheck = Babel_Plugin_Typecheck, _class13.Babel_Plugin_Transform_Decorators_Legacy = Babel_Plugin_Transform_Decorators_Legacy, _class13.Babel_Plugin_Transform_Remove_Strict_Mode = Babel_Plugin_Transform_Remove_Strict_Mode, _class13.Babel_Plugin_React_Require = Babel_Plugin_React_Require, _class13.Babel_Plugin_Import = Babel_Plugin_Import, _temp);
exports.default = BabelLoader;
;
module.exports = exports.default;