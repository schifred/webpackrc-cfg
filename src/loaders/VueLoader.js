import { Mod } from '../Mod';

export default class VueLoader extends Mod {
  mod = 'vue-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};