const path = require('path');
const Wrc = require('../../lib');
const dependencies = require('./dependencies');
const { WebpackConfig, config, installDependency } = Wrc;
const { 
  babelLoader, jsonLoader, rawLoader, urlLoader, cssLoader, lessLoader, fastSassLoader,
  cssExtractPlugin, environmentPlugin, htmlWebpackPlugin, occurrenceOrderPlugin,
  cleanWebpackPlugin, copyWebpackPlugin
} = dependencies;

let opts = new WebpackConfig();
opts.mode = 'production';
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
    'NODE_ENV': '"production"'
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
  mcssExtractPlugin.getPlugin(),
  cleanWebpackPlugin.getPlugin(),
  copyWebpackPlugin.getPlugin({          
    from: path.resolve(cwd, 'assets'),
    to: path.resolve(cwd, 'dist')
  })
];
opts.watch = true;
opts.optimization = {
  removeAvailableModules: true,
  removeEmptyChunks: true,
  mergeDuplicateChunks: true,
  minimize: true
};