'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installDependencies = undefined;

/**
 * 安装依赖
 */
let installDependencies = exports.installDependencies = (() => {
  var _ref = _asyncToGenerator(function* (installMode = 'dependencies') {
    // ctrl + c 退出
    process.on('SIGINT', function () {
      console.log('exit!');
      process.exit();
    });

    if (!!installMode) yield install();

    if (installMode === 'devDependencies') {
      for (let i = 0; i < _depend.devDependencies.length; i++) {
        const [moduleName] = _package.dependencies[_depend.devDependencies[i]] ? [_depend.devDependencies[i]] : _depend.devDependencies[i].split(/\.|\//);
        yield install(moduleName);
      };
    } else if (installMode === 'dependencies') {
      yield install(`${_package.name}`);
    };
  });

  return function installDependencies() {
    return _ref.apply(this, arguments);
  };
})();

exports.install = install;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

var _config = require('./config');

var _package = require('../../package.json');

var _depend = require('../depend');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 获取依赖的版本号
 * @param {string} name 依赖
 * @return {string} 带版本号的依赖名
 */
function getDependencyNameWithVersion(name) {
  let version = _package.dependencies[name];
  if (version) version = /^\d$/.test(version[0]) ? version : version.slice(1);
  return version ? `${name}@${version}` : name;
};

/**
 * 安装依赖
 * @param {string} name 依赖
 */
function install(name) {
  const npm = (0, _config.getConfig)('npm');
  if (!name) {
    console.info(`Installing dependencies ...`);
    _crossSpawn2.default.sync(npm, ['install'], {
      stdio: 'inherit'
    });
    console.info('Done');
    return;
  };

  const cwd = (0, _config.getConfig)('cwd');
  const modulePath = _path2.default.resolve(cwd, `./node_modules/${name}`);

  if (!_fs2.default.existsSync(modulePath)) {
    const save = (0, _config.getConfig)('save');
    const nameWithVersion = getDependencyNameWithVersion(name);
    let args = [npm === 'yarn' ? 'add' : 'install', nameWithVersion];
    if (save) args.push('--save-dev');

    console.info(`Installing ${name} ...`);
    const output = _crossSpawn2.default.sync(npm, args, {
      stdio: ["ignore", "pipe", "inherit"]
    });
    console.info('Done');

    return output;
  };
};