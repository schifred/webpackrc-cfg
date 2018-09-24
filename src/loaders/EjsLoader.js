import { Mod } from '../Mod';

export default class EjsLoader extends Mod {
  mod = 'ejs-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};