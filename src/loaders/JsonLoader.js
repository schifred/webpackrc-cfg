import { Mod } from '../Mod';

export default class JsonLoader extends Mod {
  mod = 'json-loader';

  async install(){
    await Mod.install('json-loader');
  }
};