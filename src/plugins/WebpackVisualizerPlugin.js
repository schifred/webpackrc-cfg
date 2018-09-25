import { Plugin } from '../Mod';

export default class WebpackVisualizerPlugin extends Plugin {
  mod = 'webpack-visualizer-plugin';

  constructor(opts = {}){
    super(opts);
    this.init();
  }
};