'use strict';

var _config = require('./config');

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _config.config)({
  npm: 'cnpm'
});
let opts = new _WebpackConfig2.default();
opts.mode = 'production';

const cssLoader = new _WebpackConfig2.default.loaders.CssLoader({
  a: 111
});
// cssLoader.install();
console.log(cssLoader.options);