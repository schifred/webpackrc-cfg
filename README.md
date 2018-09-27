# webpackrc-cfg

## 安装

```bash
## 全局或本地安装
$ npm i webpackrc-cfg --save

## 获取版本
$ webpackrc-cfg -v
1.0.0

## 在已创建 loader, plugin 实例的基础上，安装 loader, plugin
$ cfg install
```

## 概述

用于辅助生成 webpack 配置。

1. 创建 loader, plugin 实例。
2. 安装 loader, plugin。
3. 完成 webpack 配置。

tips: 当 loader, plugin 实例已明确指定时，通过 cfg install -d [path] 命令可安装指定的 loader, plugin。path 为生成 loader, plugin 实例的 js 文件。参考 examples/dependencies 实现。

## 示例

```Javascript
import path from 'path';
import { config, WebpackConfig, installDependency } from 'webpack-config';

const cwd = process.cwd();

config({
  npm: 'cnpm'
})

async function getWebpackConfig(mode){
  if ( typeof mode === 'boolean' && mode ){
    mode = 'production';
  } else if ( !mode ){
    mode = 'development';
  };

  // 创建 loader, plugin 实例
  const babelLoader = new WebpackConfig.loaders.BabelLoader();
  const jsonLoader = new WebpackConfig.loaders.JsonLoader();
  const rawLoader = new WebpackConfig.loaders.RawLoader();
  const urlLoader = new WebpackConfig.loaders.UrlLoader();
  const cssLoader = new WebpackConfig.loaders.CssLoader();
  const lessLoader = new WebpackConfig.loaders.LessLoader();
  const fastSassLoader = new WebpackConfig.loaders.FastSassLoader();

  const cssExtractPlugin = new WebpackConfig.plugins.ExtractTextWebpackPlugin();
  const environmentPlugin = new WebpackConfig.plugins.EnvironmentPlugin();
  const splitChunksPlugin = new WebpackConfig.plugins.SplitChunksPlugin();
  const htmlWebpackPlugin = new WebpackConfig.plugins.HtmlWebpackPlugin();
  const occurrenceOrderPlugin = new WebpackConfig.plugins.OccurrenceOrderPlugin();
  const hotModuleReplacementPlugin = new WebpackConfig.plugins.HotModuleReplacementPlugin();
  const cleanWebpackPlugin = new WebpackConfig.plugins.CleanWebpackPlugin();
  const copyWebpackPlugin = new WebpackConfig.plugins.CopyWebpackPlugin();

  // 安装 loader, plugin
  await installDependency();

  // 完成 webpack 配置
  let opts = new WebpackConfig();
  opts.mode = mode || 'development';
  opts.context = cwd;
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
  },{
    test: /\.less$/,
    loader: cssExtractPlugin.Plugin.extract({
      use: [{
        loader: cssLoader.module, 
        options: cssLoader.options
      }, lessLoader.module ]
    })
  }, {
    test: /\.(scss|sass)$/,
    loader: cssExtractPlugin.Plugin.extract({
      use: [{
        loader: cssLoader.module, 
        options: cssLoader.options
      }, fastSassLoader.module ]
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
    extensions: [ '.web.js', '.js', '.jsx', '.tsx', '.json' ]
  };
  opts.plugins = [
    environmentPlugin.getPlugin({
      'NODE_ENV': mode === 'production' ? '"production"' : '"development"'
    }),
    splitChunksPlugin.getPlugin({          
      name: 'common',
      minChunks: function (module) {// 提供的公共模块需要在 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    htmlWebpackPlugin.getPlugin({
      showErrors: true,
      template: path.resolve(cwd, './assets/index.html')
    }),
    occurrenceOrderPlugin.getPlugin(),
    mode !== 'production' ? hotModuleReplacementPlugin.getPlugin() : undefined,
    mode === 'production' ? cssExtractPlugin.getPlugin() : undefined,
    mode === 'production' ? cleanWebpackPlugin.getPlugin() : undefined,
    mode === 'production' ? copyWebpackPlugin.getPlugin({          
      from: path.resolve(cwd, 'assets'),
      to: path.resolve(cwd, 'dist')
    }) : undefined,
  ].filter(plugin => !!plugin);
  opts.devtool = 'source-map';
  opts.watch = true;
  opts.optimization = {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    minimize: mode === 'production' ? true : false
  };
};
```
