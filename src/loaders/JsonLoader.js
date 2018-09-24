import { Mod } from '../Mod';

export default class JsonLoader extends Mod {
  mod = 'json-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};