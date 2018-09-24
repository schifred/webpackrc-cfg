import { Mod } from '../Mod';

class Babel_Preset_Env extends Mod {
  mod = 'babel-preset-env';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      targets: {
        browsers: [
          'last 2 versions',
          'IE >= 9'
        ],
        uglify: true
      },
      loose: true,
      useBuiltIns: 'usage',
      ...opts
    };
    this.addDependency();
  }
};

class Babel_Preset_Stage_0 extends Mod {
  mod = 'babel-preset-stage-0';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Preset_React extends Mod {
  mod = 'babel-preset-react';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Preset_Flow extends Mod {
  mod = 'babel-preset-flow';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_Transform_Runtime extends Mod {
  mod = 'babel-plugin-transform-runtime';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      'helpers': true,
      'polyfill': true,
      'regenerator': true,
      'moduleName': 'babel-runtime',
      'useBuiltIns': false,
      ...opts
    };
    this.addDependency();
  }
};

class Babel_Plugin_Add_Module_Exports extends Mod {
  mod = 'babel-plugin-add-module-exports';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_Syntax_Dynamic_Import extends Mod {
  mod = 'babel-plugin-syntax-dynamic-import';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_Typecheck extends Mod {
  mod = 'babel-plugin-typecheck';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_Transform_Decorators_Legacy extends Mod {
  mod = 'babel-plugin-transform-decorators-legacy';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_Transform_Remove_Strict_Mode extends Mod {
  mod = 'babel-plugin-transform-remove-strict-mode';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_React_Require extends Mod {
  mod = 'babel-plugin-react-require';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

class Babel_Plugin_Import extends Mod {
  mod = 'babel-plugin-import';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};

export default class BabelLoader extends Mod {
  static Babel_Preset_Env = Babel_Preset_Env;
  static Babel_Preset_Stage_0 = Babel_Preset_Stage_0;
  static Babel_Preset_React = Babel_Preset_React;
  static Babel_Preset_Flow = Babel_Preset_Flow;

  // 注入最新的 api
  static Babel_Plugin_Transform_Runtime = Babel_Plugin_Transform_Runtime;
  // common.js 模块加载，无需 default
  static Babel_Plugin_Add_Module_Exports = Babel_Plugin_Add_Module_Exports;
  // import 动态加载模块
  static Babel_Plugin_Syntax_Dynamic_Import = Babel_Plugin_Syntax_Dynamic_Import;
  // flow 的类型注释转换
  static Babel_Plugin_Typecheck = Babel_Plugin_Typecheck;
  // 装饰器语法转换
  static Babel_Plugin_Transform_Decorators_Legacy = Babel_Plugin_Transform_Decorators_Legacy;
  // 移除 strict mode
  static Babel_Plugin_Transform_Remove_Strict_Mode = Babel_Plugin_Transform_Remove_Strict_Mode;
  // JSX 语法自动加载 react
  static Babel_Plugin_React_Require = Babel_Plugin_React_Require;
  // 加载样式等模块
  static Babel_Plugin_Import = Babel_Plugin_Import;

  mod = 'babel-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
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
      cacheDirectory: true,// 缓存babel-loader编译结果 
      ...opts
    };
    this.addDependency();
  }

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