import { Mod } from '../Mod';

export default class FileLoader extends Mod {
  mod = 'file-loader';

  async install(){
    await Mod.install('file-loader');
  }
};