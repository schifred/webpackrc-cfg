import { Plugin } from '../Mod';

export default class ExtractTextPlugin extends Plugin {
  mod = 'extract-text-webpack-plugin';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};