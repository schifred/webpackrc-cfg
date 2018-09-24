import { Mod } from '../Mod';

export default class VueLoader extends Mod {
  mod = 'vue-loader';

  async install(){
    await Mod.install('vue-loader');
  }
};