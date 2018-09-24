import { Plugin } from '../Mod';

export default class OccurrenceOrderPlugin extends Plugin {
  mod = 'webpack.optimize.OccurrenceOrderPlugin';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};