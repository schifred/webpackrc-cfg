import { Mod } from '../Mod';

export default class FileLoader extends Mod {
  mod = 'file-loader';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};