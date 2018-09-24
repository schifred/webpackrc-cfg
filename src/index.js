import WebpackConfig from './WebpackConfig';

let opts = new WebpackConfig()
opts.mode = 'production';

const cssLoader = new WebpackConfig.loaders.CssLoader();
console.log(cssLoader.options);