import { Mod } from '../Mod';

class Babel_Preset_Env extends Mod {
  // defaultOptions = {
  //   targets: {
  //     browsers: [
  //       'last 2 versions',
  //       'IE >= 9'
  //     ],
  //     uglify: true
  //   },
  //   loose: true,
  //   useBuiltIns: 'usage'
  // };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/preset-env';
    this.init();
  };
};

class Babel_Preset_React extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/preset-react';
    this.init();
  };
};
class Babel_Preset_Flow extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/preset-flow';
    this.init();
  };
};

// 注入最新的 api
class Babel_Plugin_Transform_Runtime extends Mod {
  // defaultOptions = {
  //   'helpers': true,
  //   'polyfill': true,
  //   'regenerator': true,
  //   'moduleName': 'babel-runtime',
  //   'useBuiltIns': false
  // };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-transform-runtime';
    this.init();
  };
};
// common.js 模块加载，无需 default
class Babel_Plugin_Add_Module_Exports extends Mod { };
// flow 的类型注释转换
class Babel_Plugin_Typecheck extends Mod { };
// 装饰器语法转换
class Babel_Plugin_Transform_Decorators_Legacy extends Mod { };
// 移除 strict mode
class Babel_Plugin_Transform_Remove_Strict_Mode extends Mod { };
// JSX 语法自动加载 react
class Babel_Plugin_React_Require extends Mod { };
// 加载样式等模块
class Babel_Plugin_Import extends Mod { };

// stage_0
class Babel_Plugin_Prorosal_Function_Bind extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-function-bind';
    this.init();
  };
};
// stage_1
class Babel_Plugin_Proposal_Export_Default_From extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-export-default-from';
    this.init();
  };
};
class Babel_Plugin_Proposal_Logical_Assignment_Operators extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-logical-assignment-operators';
    this.init();
  };
};
class Babel_Plugin_Proposal_Optional_Chaining extends Mod { 
  defaultOptions = {
    loose: false
  };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-optional-chaining';
    this.init();
  };
};
class Babel_Plugin_Proposal_Pipeline_Operator extends Mod { 
  defaultOptions = {
    proposal: 'minimal'
  };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-pipeline-operator';
    this.init();
  };
};
class Babel_Plugin_Proposal_Nullish_Coalescing_Operator extends Mod { 
  defaultOptions = {
    loose: false
  };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-nullish-coalescing-operator';
    this.init();
  };
};
class Babel_Plugin_Proposal_Do_Expressions extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-do-expressions';
    this.init();
  };
};
// stage_2
class Babel_Plugin_Proposal_Decorators extends Mod {  
  defaultOptions = {
    legacy: true
  };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-decorators';
    this.init();
  };
};
class Babel_Plugin_Proposal_Function_Sent extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-function-sent';
    this.init();
  };
};
class Babel_Plugin_Proposal_Export_Namespace_From extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-export-namespace-from';
    this.init();
  };
};
class Babel_Plugin_Proposal_Numeric_Separator extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-numeric-separator';
    this.init();
  };
};
class Babel_Plugin_Proposal_Throw_Expressions extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-throw-expressions';
    this.init();
  };
};
// stage_3
class Babel_Plugin_Syntax_Dynamic_Import extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-syntax-dynamic-import';
    this.init();
  };
};
class Babel_Plugin_Syntax_Import_Meta extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-syntax-import-meta';
    this.init();
  };
};
class Babel_Plugin_Proposal_Class_Properties extends Mod {  
  defaultOptions = {
    loose: false
  };

  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-class-properties';
    this.init();
  };
};
class Babel_Plugin_Proposal_Json_Strings extends Mod {  
  constructor(opts = {}){
    super(opts);
    this.mod = '@babel/plugin-proposal-json-strings';
    this.init();
  };
};

class Babel_Plugins_Stage_3 {
  get plugin(){
    return [
      new Babel_Plugin_Syntax_Dynamic_Import(),
      new Babel_Plugin_Syntax_Import_Meta(),
      new Babel_Plugin_Proposal_Class_Properties(),
      new Babel_Plugin_Proposal_Json_Strings()
    ];
  }
};

class Babel_Plugins_Stage_2 {
  get plugin(){
    return [
      ...new Babel_Plugins_Stage_3().plugin,
      new Babel_Plugin_Proposal_Decorators(),
      new Babel_Plugin_Proposal_Function_Sent(),
      new Babel_Plugin_Proposal_Export_Namespace_From(),
      new Babel_Plugin_Proposal_Numeric_Separator(),
      new Babel_Plugin_Proposal_Throw_Expressions()
    ];
  }
};

class Babel_Plugins_Stage_1 {
  get plugin(){
    return [
      ...new Babel_Plugins_Stage_2().plugin,
      new Babel_Plugin_Proposal_Export_Default_From(),
      new Babel_Plugin_Proposal_Logical_Assignment_Operators(),
      new Babel_Plugin_Proposal_Pipeline_Operator(),
      new Babel_Plugin_Proposal_Nullish_Coalescing_Operator(),
      new Babel_Plugin_Proposal_Do_Expressions()
    ];
  }
};

class Babel_Plugins_Stage_0 {
  get plugin(){
    return [
      ...new Babel_Plugins_Stage_1().plugin,
      new Babel_Plugin_Prorosal_Function_Bind()
    ];
  }
};

export default class BabelLoader extends Mod {
  static Babel_Preset_Env = Babel_Preset_Env;
  static Babel_Preset_React = Babel_Preset_React;
  static Babel_Preset_Flow = Babel_Preset_Flow;

  static Babel_Plugin_Transform_Runtime = Babel_Plugin_Transform_Runtime;
  static Babel_Plugin_Add_Module_Exports = Babel_Plugin_Add_Module_Exports;
  static Babel_Plugin_Typecheck = Babel_Plugin_Typecheck;
  static Babel_Plugin_Transform_Decorators_Legacy = Babel_Plugin_Transform_Decorators_Legacy;
  static Babel_Plugin_Transform_Remove_Strict_Mode = Babel_Plugin_Transform_Remove_Strict_Mode;
  static Babel_Plugin_React_Require = Babel_Plugin_React_Require;
  static Babel_Plugin_Import = Babel_Plugin_Import;
  static Babel_Plugin_Prorosal_Function_Bind = Babel_Plugin_Prorosal_Function_Bind;
  static Babel_Plugin_Proposal_Export_Default_From = Babel_Plugin_Proposal_Export_Default_From;
  static Babel_Plugin_Proposal_Logical_Assignment_Operators = Babel_Plugin_Proposal_Logical_Assignment_Operators;
  static Babel_Plugin_Proposal_Optional_Chaining = Babel_Plugin_Proposal_Optional_Chaining;
  static Babel_Plugin_Proposal_Pipeline_Operator = Babel_Plugin_Proposal_Pipeline_Operator;
  static Babel_Plugin_Proposal_Nullish_Coalescing_Operator = Babel_Plugin_Proposal_Nullish_Coalescing_Operator;
  static Babel_Plugin_Proposal_Do_Expressions = Babel_Plugin_Proposal_Do_Expressions;
  static Babel_Plugin_Proposal_Decorators = Babel_Plugin_Proposal_Decorators;
  static Babel_Plugin_Proposal_Function_Sent = Babel_Plugin_Proposal_Function_Sent;
  static Babel_Plugin_Proposal_Export_Namespace_From = Babel_Plugin_Proposal_Export_Namespace_From;
  static Babel_Plugin_Proposal_Numeric_Separator = Babel_Plugin_Proposal_Numeric_Separator;
  static Babel_Plugin_Proposal_Throw_Expressions = Babel_Plugin_Proposal_Throw_Expressions;
  static Babel_Plugin_Syntax_Dynamic_Import = Babel_Plugin_Syntax_Dynamic_Import;
  static Babel_Plugin_Syntax_Import_Meta = Babel_Plugin_Syntax_Import_Meta;
  static Babel_Plugin_Proposal_Class_Properties = Babel_Plugin_Proposal_Class_Properties;
  static Babel_Plugin_Proposal_Json_Strings = Babel_Plugin_Proposal_Json_Strings;

  static Babel_Plugins_Stage_0 = Babel_Plugins_Stage_0;
  static Babel_Plugins_Stage_1 = Babel_Plugins_Stage_1;
  static Babel_Plugins_Stage_2 = Babel_Plugins_Stage_2;
  static Babel_Plugins_Stage_3 = Babel_Plugins_Stage_3;

  defaultOptions = {
    babelrc: true,
    presets: [ 
      new BabelLoader.Babel_Preset_Env()
    ],
    plugins: [ 
      new BabelLoader.Babel_Plugin_Transform_Runtime(),
      new BabelLoader.Babel_Plugin_Transform_Decorators_Legacy(),
      new BabelLoader.Babel_Plugin_Add_Module_Exports(),
      // https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets
      ...new Babel_Plugins_Stage_0().plugin,
    ],
    cacheDirectory: true// 缓存babel-loader编译结果 
  };

  constructor(opts = {}){
    super(opts);
    this.init();
  }

  get dependencies(){
    return ['@babel/core', this.mod];
  }; 

  transform(){
    const { presets, plugins } = this.opts;
    let _presets = [];
    let _plugins = [];

    presets.map(preset => {
      if ( !(preset instanceof Mod) ) return preset;
      if ( preset.mod ) _presets.push(preset.mod);
      if ( preset.options ) _presets.push(preset.options);
    });

    plugins.map(plugin => {
      if ( !(plugin instanceof Mod) ) return plugin;
      if ( plugin.mod ) _plugins.push(plugin.mod);
      if ( plugin.options ) _plugins.push(plugin.options);
    });

    return {
      ...this.opts,
      presets: _presets,
      plugins: _plugins
    };
  }
};