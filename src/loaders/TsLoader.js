import { Mod } from '../Mod';

export default class TsLoader extends Mod {
  mod = 'ts-loader';

  constructor(opts = {}){
    super(opts);
    this.opts = {
      transpileOnly: true,
      ...opts
    }
  }

  async install(){
    await Mod.install('ts-loader');
  }
};