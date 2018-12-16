import { Plugin } from '../Mod';

export default class ExtractTextWebpackPlugin extends Plugin { 
  constructor(opts = {}){
    super(opts);
    this.init();
  }
};