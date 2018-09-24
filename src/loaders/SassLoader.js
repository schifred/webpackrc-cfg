import { Mod } from '../Mod';

export default class SassLoader extends Mod {
  mod = 'sass-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};