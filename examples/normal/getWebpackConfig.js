const path = require('path');
const Wrc = require('../../lib');
const WebpackConfig = Wrc.WebpackConfig;
const config = Wrc.config;
const installDependency = Wrc.installDependency;

const cwd = process.cwd();

config({
  npm: 'cnpm'
});

async function getWebpackConfig(mode){
  if ( typeof mode === 'boolean' && mode ){
    mode = 'production';
  } else if ( !mode ){
    mode = 'development';
  };

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

  await installDependency();

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
  opts.devtool = mode !== 'production' ? 'source-map' : false;
  opts.watch = true;
  opts.optimization = {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    minimize: mode === 'production' ? true : false
  };
};