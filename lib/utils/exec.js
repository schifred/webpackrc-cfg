'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// copied from dawn，https://github.com/alibaba/dawn/blob/master/lib/common/exec.js
const shify = require('shify');
const path = require('path');
const debug = require('debug')('exec');
const os = require('os');

const isWin = os.platform() == 'win32';

function exec(script, opts) {
  opts = opts || {};
  opts.cwd = opts.cwd || process.cwd();
  opts.env = _extends({}, process.env, opts.env);
  const bin = path.normalize(`${opts.cwd}/node_modules/.bin`);
  opts.env.PATH = `${opts.env.PATH}${isWin ? ';' : ':'}${bin}`;
  opts.stdio = opts.stdio || 'inherit';
  opts.builtIn = true;
  debug('opts', opts);

  let flags = [];
  Object.keys(opts.flag || {}).map(name => {
    const value = opts.flag[name];
    const flagName = `${name.length > 1 ? '--' : '-'}${name}`;
    const flagValue = typeof value === 'string' ? `=${value}` : '';
    flags.push(`${flagName}${flagValue}`);
  });

  script = `${script || ''} ${flags.join(' ')}`;

  debug('script', opts);
  return new Promise((resolve, reject) => {
    let childProcess = shify(script, opts);
    if (opts.onStart) opts.onStart(childProcess);
    childProcess.on('exit', code => {
      debug('exit', code);
      if (code !== 0) {
        return reject(new Error(`Script Error, exit ${code}`));
      }
      if (opts.onExit) opts.onExit(code, childProcess);
      resolve(childProcess);
    });
  });
}

module.exports = exec;