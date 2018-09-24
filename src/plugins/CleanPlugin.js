import { Plugin } from '../Mod';

export default class CleanPlugin extends Plugin {
  mod = 'clean-webpack-plugin';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};