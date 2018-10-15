'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class8, _temp;

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
    this.mod = '@babel/plugin-transform-runtime';
    this.init();
  }
};
;
// common.js 模块加载，无需 default
let Babel_Plugin_Add_Module_Exports = class Babel_Plugin_Add_Module_Exports extends _Mod.Mod {};
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

// stage_0
let Babel_Plugin_Prorosal_Function_Bind = class Babel_Plugin_Prorosal_Function_Bind extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-function-bind';
    this.init();
  }
};
;
// stage_1
let Babel_Plugin_Proposal_Export_Default_From = class Babel_Plugin_Proposal_Export_Default_From extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-export-default-from';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Logical_Assignment_Operators = class Babel_Plugin_Proposal_Logical_Assignment_Operators extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-logical-assignment-operators';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Optional_Chaining = class Babel_Plugin_Proposal_Optional_Chaining extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      loose: false
    };
    this.mod = '@babel/plugin-proposal-optional-chaining';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Pipeline_Operator = class Babel_Plugin_Proposal_Pipeline_Operator extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      proposal: 'minimal'
    };
    this.mod = '@babel/plugin-proposal-pipeline-operator';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Nullish_Coalescing_Operator = class Babel_Plugin_Proposal_Nullish_Coalescing_Operator extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      loose: false
    };
    this.mod = '@babel/plugin-proposal-nullish-coalescing-operator';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Do_Expressions = class Babel_Plugin_Proposal_Do_Expressions extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-do-expressions';
    this.init();
  }
};
;
// stage_2
let Babel_Plugin_Proposal_Decorators = class Babel_Plugin_Proposal_Decorators extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      decoratorsBeforeExport: true,
      legacy: true
    };
    this.mod = '@babel/plugin-proposal-decorators';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Function_Sent = class Babel_Plugin_Proposal_Function_Sent extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-function-sent';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Export_Namespace_From = class Babel_Plugin_Proposal_Export_Namespace_From extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-export-namespace-from';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Numeric_Separator = class Babel_Plugin_Proposal_Numeric_Separator extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-numeric-separator';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Throw_Expressions = class Babel_Plugin_Proposal_Throw_Expressions extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-throw-expressions';
    this.init();
  }
};
;
// stage_3
let Babel_Plugin_Syntax_Dynamic_Import = class Babel_Plugin_Syntax_Dynamic_Import extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-syntax-dynamic-import';
    this.init();
  }
};
;
let Babel_Plugin_Syntax_Import_Meta = class Babel_Plugin_Syntax_Import_Meta extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-syntax-import-meta';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Class_Properties = class Babel_Plugin_Proposal_Class_Properties extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      loose: false
    };
    this.mod = '@babel/plugin-proposal-class-properties';
    this.init();
  }
};
;
let Babel_Plugin_Proposal_Json_Strings = class Babel_Plugin_Proposal_Json_Strings extends _Mod.Mod {
  constructor(opts = {}) {
    super(opts);
    this.mod = '@babel/plugin-proposal-json-strings';
    this.init();
  }
};
;

let Babel_Plugins_Stage_3 = class Babel_Plugins_Stage_3 {
  get plugin() {
    return [new Babel_Plugin_Syntax_Dynamic_Import(), new Babel_Plugin_Syntax_Import_Meta(), new Babel_Plugin_Proposal_Class_Properties(), new Babel_Plugin_Proposal_Json_Strings()];
  }
};
;

let Babel_Plugins_Stage_2 = class Babel_Plugins_Stage_2 {
  get plugin() {
    return [...new Babel_Plugins_Stage_3().plugin, new Babel_Plugin_Proposal_Decorators(), new Babel_Plugin_Proposal_Function_Sent(), new Babel_Plugin_Proposal_Export_Namespace_From(), new Babel_Plugin_Proposal_Numeric_Separator(), new Babel_Plugin_Proposal_Throw_Expressions()];
  }
};
;

let Babel_Plugins_Stage_1 = class Babel_Plugins_Stage_1 {
  get plugin() {
    return [...new Babel_Plugins_Stage_2().plugin, new Babel_Plugin_Proposal_Export_Default_From(), new Babel_Plugin_Proposal_Logical_Assignment_Operators(), new Babel_Plugin_Proposal_Pipeline_Operator(), new Babel_Plugin_Proposal_Nullish_Coalescing_Operator(), new Babel_Plugin_Proposal_Do_Expressions()];
  }
};
;

let Babel_Plugins_Stage_0 = class Babel_Plugins_Stage_0 {
  get plugin() {
    return [...new Babel_Plugins_Stage_1().plugin, new Babel_Plugin_Prorosal_Function_Bind()];
  }
};
;

let BabelLoader = (_temp = _class8 = class BabelLoader extends _Mod.Mod {

  constructor(opts = {}) {
    super(opts);
    this.defaultOptions = {
      babelrc: true,
      presets: [new BabelLoader.Babel_Preset_Env()],
      plugins: [new BabelLoader.Babel_Plugin_Transform_Runtime(), new BabelLoader.Babel_Plugin_Transform_Decorators_Legacy(), new BabelLoader.Babel_Plugin_Add_Module_Exports(),
      // https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets
      ...new Babel_Plugins_Stage_0().plugin],
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
      if (plugin.mod && plugin.options) _plugins.push([plugin.mod, plugin.options]);
      if (plugin.mod) _plugins.push(plugin.mod);
    });

    return _extends({}, this.opts, {
      presets: _presets,
      plugins: _plugins
    });
  }
}, _class8.Babel_Preset_Env = Babel_Preset_Env, _class8.Babel_Preset_React = Babel_Preset_React, _class8.Babel_Preset_Flow = Babel_Preset_Flow, _class8.Babel_Plugin_Transform_Runtime = Babel_Plugin_Transform_Runtime, _class8.Babel_Plugin_Add_Module_Exports = Babel_Plugin_Add_Module_Exports, _class8.Babel_Plugin_Typecheck = Babel_Plugin_Typecheck, _class8.Babel_Plugin_Transform_Decorators_Legacy = Babel_Plugin_Transform_Decorators_Legacy, _class8.Babel_Plugin_Transform_Remove_Strict_Mode = Babel_Plugin_Transform_Remove_Strict_Mode, _class8.Babel_Plugin_React_Require = Babel_Plugin_React_Require, _class8.Babel_Plugin_Import = Babel_Plugin_Import, _class8.Babel_Plugin_Prorosal_Function_Bind = Babel_Plugin_Prorosal_Function_Bind, _class8.Babel_Plugin_Proposal_Export_Default_From = Babel_Plugin_Proposal_Export_Default_From, _class8.Babel_Plugin_Proposal_Logical_Assignment_Operators = Babel_Plugin_Proposal_Logical_Assignment_Operators, _class8.Babel_Plugin_Proposal_Optional_Chaining = Babel_Plugin_Proposal_Optional_Chaining, _class8.Babel_Plugin_Proposal_Pipeline_Operator = Babel_Plugin_Proposal_Pipeline_Operator, _class8.Babel_Plugin_Proposal_Nullish_Coalescing_Operator = Babel_Plugin_Proposal_Nullish_Coalescing_Operator, _class8.Babel_Plugin_Proposal_Do_Expressions = Babel_Plugin_Proposal_Do_Expressions, _class8.Babel_Plugin_Proposal_Decorators = Babel_Plugin_Proposal_Decorators, _class8.Babel_Plugin_Proposal_Function_Sent = Babel_Plugin_Proposal_Function_Sent, _class8.Babel_Plugin_Proposal_Export_Namespace_From = Babel_Plugin_Proposal_Export_Namespace_From, _class8.Babel_Plugin_Proposal_Numeric_Separator = Babel_Plugin_Proposal_Numeric_Separator, _class8.Babel_Plugin_Proposal_Throw_Expressions = Babel_Plugin_Proposal_Throw_Expressions, _class8.Babel_Plugin_Syntax_Dynamic_Import = Babel_Plugin_Syntax_Dynamic_Import, _class8.Babel_Plugin_Syntax_Import_Meta = Babel_Plugin_Syntax_Import_Meta, _class8.Babel_Plugin_Proposal_Class_Properties = Babel_Plugin_Proposal_Class_Properties, _class8.Babel_Plugin_Proposal_Json_Strings = Babel_Plugin_Proposal_Json_Strings, _class8.Babel_Plugins_Stage_0 = Babel_Plugins_Stage_0, _class8.Babel_Plugins_Stage_1 = Babel_Plugins_Stage_1, _class8.Babel_Plugins_Stage_2 = Babel_Plugins_Stage_2, _class8.Babel_Plugins_Stage_3 = Babel_Plugins_Stage_3, _temp);
exports.default = BabelLoader;
;
module.exports = exports.default;