import { config } from './config';
import { installDependency } from './dependency';
import WebpackConfig from './WebpackConfig';

config({
  npm: 'cnpm'
})
let opts = new WebpackConfig()
opts.mode = 'production';

// const babelLoader = new WebpackConfig.loaders.BabelLoader({
//   a: 111
// });
const environmentPlugin = new WebpackConfig.plugins.EnvironmentPlugin({
  a: 111
});
installDependency();
console.log(environmentPlugin);
