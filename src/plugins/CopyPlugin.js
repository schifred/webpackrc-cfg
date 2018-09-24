import { Plugin } from '../Mod';

export default class CopyPlugin extends Plugin {
  mod = 'copy-webpack-plugin';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};