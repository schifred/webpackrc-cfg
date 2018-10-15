import { Mod } from '../Mod';

class Babel_Preset_Env extends Mod {
  defaultOptions = {
    targets: {
      browsers: [
        'last 2 versions',
        'IE >= 9'
      ],
      uglify: true
    },
    loose: true,
    useBuiltIns: 'usage'
  };

  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['@babel/preset-env'];
  }; 
};

class Babel_Preset_Stage_0 extends Mod {
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['@babel/preset-stage-0'];
  }; 
};
class Babel_Preset_React extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['@babel/preset-react'];
  }; 
};
class Babel_Preset_Flow extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['@babel/preset-flow'];
  }; 
};

// 注入最新的 api
class Babel_Plugin_Transform_Runtime extends Mod {
  defaultOptions = {
    'helpers': true,
    'polyfill': true,
    'regenerator': true,
    'moduleName': 'babel-runtime',
    'useBuiltIns': false
  };

  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['@babel/plugin-transform-runtime'];
  }; 
};
// common.js 模块加载，无需 default
class Babel_Plugin_Add_Module_Exports extends Mod { };
// import 动态加载模块
class Babel_Plugin_Syntax_Dynamic_Import extends Mod { 
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return ['@babel/plugin-syntax-dynamic-import'];
  }; 
};
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

export default class BabelLoader extends Mod {
  static Babel_Preset_Env = Babel_Preset_Env;
  static Babel_Preset_Stage_0 = Babel_Preset_Stage_0;
  static Babel_Preset_React = Babel_Preset_React;
  static Babel_Preset_Flow = Babel_Preset_Flow;

  static Babel_Plugin_Transform_Runtime = Babel_Plugin_Transform_Runtime;
  static Babel_Plugin_Add_Module_Exports = Babel_Plugin_Add_Module_Exports;
  static Babel_Plugin_Syntax_Dynamic_Import = Babel_Plugin_Syntax_Dynamic_Import;
  static Babel_Plugin_Typecheck = Babel_Plugin_Typecheck;
  static Babel_Plugin_Transform_Decorators_Legacy = Babel_Plugin_Transform_Decorators_Legacy;
  static Babel_Plugin_Transform_Remove_Strict_Mode = Babel_Plugin_Transform_Remove_Strict_Mode;
  static Babel_Plugin_React_Require = Babel_Plugin_React_Require;
  static Babel_Plugin_Import = Babel_Plugin_Import;

  defaultOptions = {
    babelrc: true,
    presets: [ 
      new BabelLoader.Babel_Preset_Env(), 
      new BabelLoader.Babel_Preset_Stage_0(),
    ],
    plugins: [ 
      new BabelLoader.Babel_Plugin_Transform_Runtime(),
      new BabelLoader.Babel_Plugin_Transform_Decorators_Legacy(),
      new BabelLoader.Babel_Plugin_Add_Module_Exports()
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