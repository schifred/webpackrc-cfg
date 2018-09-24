import { Mod } from '../Mod';

export default class RawLoader extends Mod {
  mod = 'raw-loader';

  async install(){
    await Mod.install('raw-loader');
  }
};