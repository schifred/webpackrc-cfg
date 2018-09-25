import { Plugin } from '../Mod';

export default class CommonsChunkPlugin extends Plugin {
  mod = 'webpack.optimize.CommonsChunkPlugin';

  constructor(opts = {}){
    super(opts);
    this.init();
  }
};