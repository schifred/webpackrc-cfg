'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installDependency = exports.install = undefined;

let install = exports.install = (() => {
  var _ref = _asyncToGenerator(function* (name) {
    if (!name) return;

    const modulePath = _path2.default.resolve(_config.cwd, `./node_modules/${name}`);

    if (!_fs2.default.existsSync(modulePath)) {
      console.info(`Installing ${name} ...`);
      yield (0, _exec2.default)(`${_config.npm} install ${name}`, {
        save: !!_config.buildin
      });
      console.info('Done');
    };
  });

  return function install(_x) {
    return _ref.apply(this, arguments);
  };
})();

let installDependency = exports.installDependency = (() => {
  var _ref2 = _asyncToGenerator(function* () {
    for (let i = 0; i < peerDependencies.length; i++) {
      const [moduleName] = peerDependencies[i].split('.');
      yield install(moduleName);
    };
  });

  return function installDependency() {
    return _ref2.apply(this, arguments);
  };
})();

exports.addDependency = addDependency;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _exec = require('./utils/exec');

var _exec2 = _interopRequireDefault(_exec);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let peerDependencies = [];

function addDependency(dependencies) {
  if (Array.isArray(dependencies)) {
    peerDependencies = peerDependencies.concat(dependencies);
  } else if (dependencies) {
    peerDependencies.push(dependencies);
  };
};

;