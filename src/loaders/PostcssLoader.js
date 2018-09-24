import Mod from '../Mod';

export default class PostcssLoader extends Mod {
  _mod = 'postcss-loader';
  _options = { 
    plugins: [
      require('autoprefixer')()
    ]
  };
};