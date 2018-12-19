'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // 参考 https://github.com/crlang/easy-webpack-4/blob/master/webpack.config.js


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _config = require('./config');

var _installDependencies = require('./installDependencies');

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { EslintLoader, BabelLoader, TsLoader, RawLoader, UrlLoader, CssLoader,
  PostcssLoader, LessLoader, FastSassLoader, MiniCssExtractLoader } = _WebpackConfig2.default.loaders;
const { MiniCssExtractPlugin, DefinePlugin, HtmlWebpackPlugin, OccurrenceOrderPlugin,
  HotModuleReplacementPlugin, CleanWebpackPlugin, Webpackbar, CopyWebpackPlugin,
  UglifyjsWebpackPlugin, OptimizeCssAssetsWebpackPlugin } = _WebpackConfig2.default.plugins;

// 创建 loader, plugin 实例
const eslintLoader = new EslintLoader();
const babelLoader = new BabelLoader();
const rawLoader = new RawLoader();
const urlLoader = new UrlLoader();
const cssLoader = new CssLoader();
const postcssLoader = new PostcssLoader();
const lessLoader = new LessLoader();
const fastSassLoader = new FastSassLoader();
const tsLoader = new TsLoader();
const miniCssExtractLoader = new MiniCssExtractLoader();

// 创建 plugin 实例
const miniCssExtractPlugin = new MiniCssExtractPlugin();
const definePlugin = new DefinePlugin();
const htmlWebpackPlugin = new HtmlWebpackPlugin();
const occurrenceOrderPlugin = new OccurrenceOrderPlugin();
const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();
const cleanWebpackPlugin = new CleanWebpackPlugin();
const webpackbar = new Webpackbar();
const copyWebpackPlugin = new CopyWebpackPlugin();
// const sourceMapDevToolPlugin = new SourceMapDevToolPlugin();
const uglifyjsWebpackPlugin = new UglifyjsWebpackPlugin();
const optimizeCssAssetsWebpackPlugin = new OptimizeCssAssetsWebpackPlugin();

/**
 * 基础配置
 * @param {WebpackConfig} webpackConfig WebpackConfig 实例
 * @param {object} options 选项
 * @param {object} context 上下文
 */
function applyBasic(webpackConfig, options, context) {
  let { mode, folders, entry, output, publicPath, resolve, alias, devtool,
    externals, target, splitChunks, splitChunksOptions = {} } = options;
  let { cwd, realPaths: { app, src }, paths: { dist } } = context;

  if (entry) {
    Object.keys(entry).map(key => {
      entry[key] = _path2.default.resolve(app, entry[key]);
    });
  }

  if (alias) {
    Object.keys(alias).map(key => {
      alias[key] = _path2.default.resolve(app, alias[key]);
    });
  } else {
    alias = (0, _utils.getDirs)(src);
  };

  webpackConfig.mode = mode || 'development';
  webpackConfig.context = cwd;
  webpackConfig.entry = entry || (0, _utils.getFiles)(src);
  webpackConfig.output = output || {
    path: `./${dist}`,
    filename: folders && folders.js ? `${folders.js}/[name].js` : '[name].js',
    publicPath: mode === 'production' ? publicPath || './' : '/'
  };
  webpackConfig.resolve = resolve ? _extends({ alias }, resolve) : {
    extensions: ['.web.js', '.js', '.jsx', '.tsx', '.json'],
    alias
  };
  webpackConfig.devtool = mode !== 'production' ? devtool || 'source-map' : false;
  if (mode !== 'production') webpackConfig.watch = true;
  webpackConfig.optimization = _extends({}, mode !== 'production' ? {} : {
    minimizer: [uglifyjsWebpackPlugin.getPlugin({
      cache: true,
      parallel: true
    }), optimizeCssAssetsWebpackPlugin.getPlugin({})]
  }, {
    splitChunks: splitChunks ? splitChunks : {
      cacheGroups: {
        styles: _extends({
          name: folders && folders.style ? `${folders.style}/common` : 'common',
          test: /\.css$/,
          chunks: 'all',
          minChunks: 2
        }, splitChunksOptions),
        js: _extends({
          name: folders && folders.js ? `${folders.js}/common` : 'common',
          test: /\.js$/,
          chunks: 'all',
          minChunks: 2
        }, splitChunksOptions)
      }
    }
  });
  if (externals) webpackConfig.externals = externals;
  if (target) webpackConfig.target = target;
}

/**
 * 加载器配置
 * @param {WebpackConfig} webpackConfig WebpackConfig 实例
 * @param {object} options 选项
 * @param {object} context 上下文
 */
function applyRules(webpackConfig, options, context) {
  const { rules = [], module = {} } = options;
  const { eslint, babel = {}, ts = {}, css = {} } = module;

  webpackConfig.rules = [{
    test: /\.(js|jsx|mjs)$/,
    loader: [{
      loader: babelLoader.module,
      options: babelLoader.getOptions(babel)
    }, eslint ? {
      loader: eslintLoader.module,
      options: eslintLoader.getOptions(typeof eslint === 'object' ? eslint : {})
    } : undefined].filter(loader => !!loader),
    exclude: [/node_modules/]
  }, {
    test: /\.(ts|tsx)$/,
    loader: [{
      loader: babelLoader.module,
      options: babelLoader.getOptions(babel)
    }, {
      loader: tsLoader.module,
      options: tsLoader.getOptions(ts)
    }, eslint ? {
      loader: eslintLoader.module,
      options: eslintLoader.getOptions(typeof eslint === 'object' ? eslint : {})
    } : undefined].filter(loader => !!loader)
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
    loader: [miniCssExtractLoader.module, {
      loader: cssLoader.module,
      options: cssLoader.getOptions(_extends({}, css, {
        importLoaders: 2
      }))
    }, {
      loader: postcssLoader.module,
      options: postcssLoader.options
    }, lessLoader.module]
  }, {
    test: /\.(scss|sass)$/,
    loader: [miniCssExtractLoader.module, {
      loader: cssLoader.module,
      options: cssLoader.getOptions(_extends({}, css, {
        importLoaders: 2
      }))
    }, {
      loader: postcssLoader.module,
      options: postcssLoader.options
    }, fastSassLoader.module]
  }, {
    test: /\.css$/,
    loader: [miniCssExtractLoader.module, {
      loader: cssLoader.module,
      options: cssLoader.getOptions(_extends({}, css, {
        importLoaders: 1
      }))
    }, {
      loader: postcssLoader.module,
      options: postcssLoader.options
    }]
  }, ...rules];
};

/**
 * 插件配置
 * @param {WebpackConfig} webpackConfig WebpackConfig 实例
 * @param {object} options 选项
 * @param {object} context 上下文
 */
function applyPlugins(webpackConfig, options, context) {
  const { mode, folders } = options;
  const { realPaths: { app, src, dist, assets } } = context;

  let htmls = (0, _utils.getFiles)(src, /\.html$|\.ejs$/);

  webpackConfig.plugins = [definePlugin.getPlugin({
    'process.env.NODE_ENV': mode === 'production' ? '"production"' : '"development"'
  }), ...Object.keys(htmls).map(fileName => {
    return htmlWebpackPlugin.getPlugin({
      title: fileName,
      showErrors: true,
      template: htmls[fileName]
    });
  }), occurrenceOrderPlugin.getPlugin(), mode !== 'production' ? hotModuleReplacementPlugin.getPlugin() : undefined, miniCssExtractPlugin.getPlugin({
    filename: folders && folders.style ? `${folders.style}/[name].css` : "[name].css"
  }), mode === 'production' ? cleanWebpackPlugin.getPlugin([dist], {
    root: app
  }) : undefined, mode === 'production' && (0, _fs.existsSync)(assets) ? copyWebpackPlugin.getPlugin([{
    from: assets,
    to: dist
  }]) : undefined,
  // mode === 'production' && devtool ? sourceMapDevToolPlugin.getPlugin() : undefined,
  webpackbar.getPlugin()].filter(plugin => !!plugin);
}

/**
 * 获取 webpack 配置
 * @param {object} opts 选项
 * @param {object} context 上下文
 * @return {object} webpack 配置
 */

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (opts = { mode: 'production' }, context, installMode) {
    const { npm } = opts,
          options = _objectWithoutProperties(opts, ['npm']);
    const { cwd, paths } = context;
    const ctx = (0, _utils.createCtx)(paths, cwd);

    (0, _config.config)({
      npm: npm || 'npm',
      cwd
    });

    // 安装依赖
    yield (0, _installDependencies.installDependencies)(installMode);

    // 生成 webpack 配置
    let webpackConfig = new _WebpackConfig2.default();
    applyBasic(webpackConfig, options, ctx);
    applyRules(webpackConfig, options, ctx);
    applyPlugins(webpackConfig, options, ctx);

    return webpackConfig.options;
  });

  function getWebpackConfig() {
    return _ref.apply(this, arguments);
  }

  return getWebpackConfig;
})();

module.exports = exports.default;