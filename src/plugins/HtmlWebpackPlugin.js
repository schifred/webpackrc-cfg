import { Plugin } from '../Mod';

export default class HtmlWebpackPlugin extends Plugin {
  mod = 'html-webpack-plugin';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};