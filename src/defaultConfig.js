import { config } from './config';
import WebpackConfig from './WebpackConfig';

config({
  npm: 'cnpm'
})
let opts = new WebpackConfig()
opts.mode = 'production';

const babelLoader = new WebpackConfig.loaders.BabelLoader({
  a: 111
});
babelLoader.install();
console.log(babelLoader.options);
