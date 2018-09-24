import { Mod } from '../Mod';

export default class EjsLoader extends Mod {
  mod = 'ejs-loader';

  async install(){
    await Mod.install('ejs-loader');
  }
};