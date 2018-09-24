import { config } from './config';
import WebpackConfig from './WebpackConfig';

config({
  npm: 'cnpm'
})
let opts = new WebpackConfig()
opts.mode = 'production';

const cssLoader = new WebpackConfig.loaders.CssLoader({
  a: 111
});
// cssLoader.install();
console.log(cssLoader.options);
