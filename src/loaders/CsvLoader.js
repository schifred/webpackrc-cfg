import { Mod } from '../Mod';

export default class CsvLoader extends Mod {
  mod = 'csv-loader';

  async install(){
    await Mod.install('csv-loader');
  }
};