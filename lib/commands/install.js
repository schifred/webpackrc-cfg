'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commonBin = require('common-bin');

var _commonBin2 = _interopRequireDefault(_commonBin);

var _dependency = require('../dependency');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let Install = class Install extends _commonBin2.default {
  constructor(rawArgv) {
    super(rawArgv);

    this.options = {
      dependencies: {
        type: 'string',
        default: false,
        alias: "d",
        description: 'dependencies\'s path'
      }
    };
  }

  run({ cwd, env, argv, rawArgv }) {
    return _asyncToGenerator(function* () {
      if (!argv.d) {
        console.warn('dependencies\'s path is required to install loaders and plugins');
        return;
      };

      yield require(_path2.default.resolve(cwd, argv.d));
      yield (0, _dependency.installDependency)();
    })();
  }

  get description() {
    return 'install loaders and plugins';
  }
};
;

module.exports = Install;