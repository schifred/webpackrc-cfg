
const Wrc = require('../../lib');
const WebpackConfig = Wrc.WebpackConfig;

exports.babelLoader = new WebpackConfig.loaders.BabelLoader();
exports.jsonLoader = new WebpackConfig.loaders.JsonLoader();
exports.rawLoader = new WebpackConfig.loaders.RawLoader();
exports.urlLoader = new WebpackConfig.loaders.UrlLoader();
exports.cssLoader = new WebpackConfig.loaders.CssLoader();
exports.lessLoader = new WebpackConfig.loaders.LessLoader();
exports.fastSassLoader = new WebpackConfig.loaders.FastSassLoader();

exports.cssExtractPlugin = new WebpackConfig.plugins.ExtractTextWebpackPlugin();
exports.environmentPlugin = new WebpackConfig.plugins.EnvironmentPlugin();
exports.htmlWebpackPlugin = new WebpackConfig.plugins.HtmlWebpackPlugin();
exports.occurrenceOrderPlugin = new WebpackConfig.plugins.OccurrenceOrderPlugin();
exports.hotModuleReplacementPlugin = new WebpackConfig.plugins.HotModuleReplacementPlugin();
exports.cleanWebpackPlugin = new WebpackConfig.plugins.CleanWebpackPlugin();
exports.copyWebpackPlugin = new WebpackConfig.plugins.CopyWebpackPlugin();