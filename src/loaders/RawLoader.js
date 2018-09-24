import { Mod } from '../Mod';

export default class RawLoader extends Mod {
  mod = 'raw-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};