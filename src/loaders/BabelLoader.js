import Mod from '../Mod';

class Babel_Preset_Env extends Mod {
  _mod = 'babel-preset-env';
  _options = {
    targets: {
      browsers: [
        'last 2 versions',
        'IE >= 9'
      ],
      uglify: true
    },
    include: [],
    exclude: [],
    loose: true,
    modules: 'commonjs',
    useBuiltIns: 'usage',
    spec: false,
    debug: undefined
  };
};

class Babel_Preset_Stage_0 extends Mod {
  _mod = 'babel-preset-stage-0';
};

class Babel_Preset_React extends Mod {
  _mod = 'babel-preset-react';
};

class Babel_Preset_Flow extends Mod {
  _mod = 'babel-preset-flow';
};

class Babel_Plugin_Transform_Runtime extends Mod {
  _mod = 'babel-plugin-transform-runtime';
  _options = {
    'helpers': true,
    'polyfill': true,
    'regenerator': true,
    'moduleName': 'babel-runtime',
    'useBuiltIns': false
  }
};

class Babel_Plugin_Add_Module_Exports extends Mod {
  _mod = 'babel-plugin-add-module-exports';
};

class Babel_Plugin_Syntax_Dynamic_Import extends Mod {
  _mod = 'babel-plugin-syntax-dynamic-import';
};

class Babel_Plugin_Typecheck extends Mod {
  _mod = 'babel-plugin-typecheck';
};

class Babel_Plugin_Transform_Decorators_Legacy extends Mod {
  _mod = 'babel-plugin-transform-decorators-legacy';
};

class Babel_Plugin_Transform_Remove_Strict_Mode extends Mod {
  _mod = 'babel-plugin-transform-remove-strict-mode';
};

class Babel_Plugin_React_Require extends Mod {
  _mod = 'babel-plugin-react-require';
};

class Babel_Plugin_Import extends Mod {
  _mod = 'babel-plugin-import';
};

export default class BabelLoader extends Mod {
  static babel_preset_env = new Babel_Preset_Env();
  static babel_preset_stage_0 = new Babel_Preset_Stage_0();
  static babel_preset_react = new Babel_Preset_React();
  static babel_preset_flow = new Babel_Preset_Flow();

  // 注入最新的 api
  static babel_plugin_transform_runtime = new Babel_Plugin_Transform_Runtime();
  // common.js 模块加载，无需 default
  static babel_plugin_add_module_exports = new Babel_Plugin_Add_Module_Exports();
  // import 动态加载模块
  static babel_plugin_syntax_dynamic_import = new Babel_Plugin_Syntax_Dynamic_Import();
  // flow 的类型注释转换
  static babel_plugin_typecheck = new Babel_Plugin_Typecheck();
  // 装饰器语法转换
  static babel_plugin_transform_decorators_legacy = new Babel_Plugin_Transform_Decorators_Legacy();
  // 移除 strict mode
  static babel_plugin_transform_remove_strict_mode = new Babel_Plugin_Transform_Remove_Strict_Mode();
  // JSX 语法自动加载 react
  static babel_plugin_react_require = new Babel_Plugin_React_Require();
  // 加载样式等模块
  static babel_plugin_import = new Babel_Plugin_Import();

  _mod = 'babel-loader';
  _options = {
    babelrc: true,
    presets: [ 
      BabelLoader.babel_preset_env, 
      BabelLoader.babel_preset_stage_0,
    ],
    plugins: [ 
      BabelLoader.babel_plugin_transform_runtime,
      BabelLoader.babel_plugin_transform_decorators_legacy,
      BabelLoader.babel_plugin_add_module_exports
    ],
    cacheDirectory: true// 缓存babel-loader编译结果 
  }

  transform(){
    const { presets, plugins } = this._options;
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
      ...this._options,
      presets: _presets,
      plugins: _plugins
    };
  }
};