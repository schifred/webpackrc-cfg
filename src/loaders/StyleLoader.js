import { Mod } from '../Mod';

export default class StyleLoader extends Mod {
  mod = 'style-loader';

  async install(){
    await Mod.install('style-loader');
  }
};