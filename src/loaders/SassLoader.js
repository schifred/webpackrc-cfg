import { Mod } from '../Mod';

export default class SassLoader extends Mod {
  mod = 'sass-loader';

  async install(){
    await Mod.install('sass-loader');
  }
};