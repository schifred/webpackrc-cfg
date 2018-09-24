import { Plugin } from '../Mod';

export default class VisualizerPlugin extends Plugin {
  mod = 'webpack-visualizer-plugin';

  constructor(opts = {}){
    super(opts);
    this.addDependency();
  }
};