import Mod from '../Mod';

export default class UrlLoader extends Mod {
  _mod = 'url-loader';
  _options = { 
    limit: 8192
  };
};