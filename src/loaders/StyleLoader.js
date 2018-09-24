import { Mod } from '../Mod';

export default class StyleLoader extends Mod {
  mod = 'style-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};