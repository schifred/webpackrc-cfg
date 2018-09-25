import { Mod } from '../Mod';

export default class SassLoader extends Mod {
  constructor(opts = {}){
    super(opts);
    this.init();
  };

  get dependencies(){
    return [this.mod, 'node-sass'];
  }
};