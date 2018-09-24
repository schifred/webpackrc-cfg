import exec from './utils/exec';

export default class Mod {
  static async install(name){
    console.info(`Installing ${name} ...`);
    return await exec(`npm i ${name}`);
  }

  buildin = false;

  constructor(opts = {}){
    const { buildin } = opts;
    this.buildin = buildin;
  }

  get mod(){
    return this._buildin ? require.resolve(this._mod) : this._mod;
  }

  get options(){
    return this.transform ? this.transform(this._options) : this._options;
  }
};