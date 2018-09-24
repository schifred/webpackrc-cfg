// copied from dawn，https://github.com/alibaba/dawn/blob/master/lib/common/exec.js
const shify = require('shify');
const path = require('path');
const debug = require('debug')('exec');
const os = require('os');

const isWin = os.platform() == 'win32';

function exec(script, opts) {
  opts = opts || {};
  opts.cwd = opts.cwd || process.cwd();
  opts.env = Object.assign({}, process.env, opts.env);
  const bin = path.normalize(`${opts.cwd}/node_modules/.bin`);
  opts.env.PATH = `${opts.env.PATH}${isWin ? ';' : ':'}${bin}`;
  opts.stdio = opts.stdio || 'inherit';
  opts.builtIn = true;
  debug('opts', opts);
  script = script || '';
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