'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CleanPlugin = require('./CleanPlugin');

var _CleanPlugin2 = _interopRequireDefault(_CleanPlugin);

var _CopyPlugin = require('./CopyPlugin');

var _CopyPlugin2 = _interopRequireDefault(_CopyPlugin);

var _EnvironmentPlugin = require('./EnvironmentPlugin');

var _EnvironmentPlugin2 = _interopRequireDefault(_EnvironmentPlugin);

var _ExtractTextPlugin = require('./ExtractTextPlugin');

var _ExtractTextPlugin2 = _interopRequireDefault(_ExtractTextPlugin);

var _HotModuleReplacementPlugin = require('./HotModuleReplacementPlugin');

var _HotModuleReplacementPlugin2 = _interopRequireDefault(_HotModuleReplacementPlugin);

var _HtmlWebpackPlugin = require('./HtmlWebpackPlugin');

var _HtmlWebpackPlugin2 = _interopRequireDefault(_HtmlWebpackPlugin);

var _OccurrenceOrderPlugin = require('./OccurrenceOrderPlugin');

var _OccurrenceOrderPlugin2 = _interopRequireDefault(_OccurrenceOrderPlugin);

var _OptimizeCssAssetsPlugin = require('./OptimizeCssAssetsPlugin');

var _OptimizeCssAssetsPlugin2 = _interopRequireDefault(_OptimizeCssAssetsPlugin);

var _SplitChunksPlugin = require('./SplitChunksPlugin');

var _SplitChunksPlugin2 = _interopRequireDefault(_SplitChunksPlugin);

var _VisualizerPlugin = require('./VisualizerPlugin');

var _VisualizerPlugin2 = _interopRequireDefault(_VisualizerPlugin);

var _WatchMissingNodeModulesPlugin = require('./WatchMissingNodeModulesPlugin');

var _WatchMissingNodeModulesPlugin2 = _interopRequireDefault(_WatchMissingNodeModulesPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  CleanPlugin: _CleanPlugin2.default,
  CopyPlugin: _CopyPlugin2.default,
  EnvironmentPlugin: _EnvironmentPlugin2.default,
  ExtractTextPlugin: _ExtractTextPlugin2.default,
  HotModuleReplacementPlugin: _HotModuleReplacementPlugin2.default,
  HtmlWebpackPlugin: _HtmlWebpackPlugin2.default,
  OccurrenceOrderPlugin: _OccurrenceOrderPlugin2.default,
  OccurrenceOrderPlugin: _OccurrenceOrderPlugin2.default,
  OptimizeCssAssetsPlugin: _OptimizeCssAssetsPlugin2.default,
  SplitChunksPlugin: _SplitChunksPlugin2.default,
  VisualizerPlugin: _VisualizerPlugin2.default,
  WatchMissingNodeModulesPlugin: _WatchMissingNodeModulesPlugin2.default
};
module.exports = exports.default;