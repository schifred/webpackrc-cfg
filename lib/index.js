'use strict';

var _WebpackConfig = require('./WebpackConfig');

var _WebpackConfig2 = _interopRequireDefault(_WebpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let opts = new _WebpackConfig2.default();
opts.mode = 'production';

const cssLoader = new _WebpackConfig2.default.loaders.CssLoader();
console.log(cssLoader.options);