'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

var _dependency = require('./dependency');

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _config.config)({
  npm: 'cnpm'
});

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (mode) {
    if (typeof mode === 'boolean' && mode) {
      mode = 'production';
    } else if (!mode) {
      mode = 'development';
    };

    const babelLoader = new _WebpackConfig2.default.loaders.BabelLoader();
    const jsonLoader = new _WebpackConfig2.default.loaders.JsonLoader();
    const rawLoader = new _WebpackConfig2.default.loaders.RawLoader();
    const urlLoader = new _WebpackConfig2.default.loaders.UrlLoader();
    const cssLoader = new _WebpackConfig2.default.loaders.CssLoader();
    const lessLoader = new _WebpackConfig2.default.loaders.LessLoader();
    const fastSassLoader = new _WebpackConfig2.default.loaders.FastSassLoader();

    const cssExtractPlugin = new _WebpackConfig2.default.plugins.ExtractTextWebpackPlugin();
    const environmentPlugin = new _WebpackConfig2.default.plugins.EnvironmentPlugin();
    const splitChunksPlugin = new _WebpackConfig2.default.plugins.SplitChunksPlugin();
    const htmlWebpackPlugin = new _WebpackConfig2.default.plugins.HtmlWebpackPlugin();
    const occurrenceOrderPlugin = new _WebpackConfig2.default.plugins.OccurrenceOrderPlugin();
    const hotModuleReplacementPlugin = new _WebpackConfig2.default.plugins.HotModuleReplacementPlugin();
    const cleanWebpackPlugin = new _WebpackConfig2.default.plugins.CleanWebpackPlugin();
    const copyWebpackPlugin = new _WebpackConfig2.default.plugins.CopyWebpackPlugin();

    yield (0, _dependency.installDependency)();

    let opts = new _WebpackConfig2.default();
    opts.mode = mode || 'development';
    opts.context = _config.cwd;
    opts.entry = './src/index.js';
    opts.output = {
      path: './dist',
      fileName: '[name].js'
    };
    opts.rules = [{
      test: /\.(js|jsx|mjs)$/,
      loader: babelLoader.module,
      options: babelLoader.options,
      exclude: [/node_modules/]
    }, {
      test: /\.json$/,
      loader: jsonLoader.module
    }, {
      test: /\.html$/,
      loader: rawLoader.module
    }, {
      test: /\.(png|jpg|gif)\?*.*$/,
      loader: urlLoader.module,
      options: urlLoader.options
    }, {
      test: /\.(eot|woff|woff2|webfont|ttf|svg)\?*.*$/,
      loader: urlLoader.module,
      options: urlLoader.options
    }, {
      test: /\.less$/,
      loader: cssExtractPlugin.Plugin.extract({
        use: [{
          loader: cssLoader.module,
          options: cssLoader.options
        }, lessLoader.module]
      })
    }, {
      test: /\.(scss|sass)$/,
      loader: cssExtractPlugin.Plugin.extract({
        use: [{
          loader: cssLoader.module,
          options: cssLoader.options
        }, fastSassLoader.module]
      })
    }, {
      test: /\.css$/,
      loader: cssExtractPlugin.Plugin.extract({
        use: [{
          loader: cssLoader.module,
          options: cssLoader.options
        }]
      })
    }];
    opts.reolve = {
      extensions: ['.web.js', '.js', '.jsx', '.tsx', '.json']
    };
    opts.plugins = [environmentPlugin.getPlugin({
      'NODE_ENV': mode === 'production' ? '"production"' : '"development"'
    }), splitChunksPlugin.getPlugin({
      name: 'common',
      minChunks: function (module) {
        // 提供的公共模块需要在 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }), htmlWebpackPlugin.getPlugin({
      showErrors: true,
      template: _path2.default.resolve(_config.cwd, './assets/index.html')
    }), occurrenceOrderPlugin.getPlugin(), mode !== 'production' ? hotModuleReplacementPlugin.getPlugin() : undefined, mode === 'production' ? cssExtractPlugin.getPlugin() : undefined, mode === 'production' ? cleanWebpackPlugin.getPlugin() : undefined, mode === 'production' ? copyWebpackPlugin.getPlugin({
      from: _path2.default.resolve(_config.cwd, 'assets'),
      to: _path2.default.resolve(_config.cwd, 'dist')
    }) : undefined].filter(function (plugin) {
      return !!plugin;
    });
    opts.devtool = 'source-map';
    opts.watch = true;
    opts.optimization = {
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      minimize: mode === 'production' ? true : false
    };
  });

  function getDefaultConfig(_x) {
    return _ref.apply(this, arguments);
  }

  return getDefaultConfig;
})();

module.exports = exports.default;