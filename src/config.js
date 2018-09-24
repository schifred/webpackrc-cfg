export let npm = 'npm';
export let buildin = false;
export let cwd = process.cwd();

export function config(opts = {}){
  if ( opts.npm !== undefined ) npm = opts.npm;
  if ( opts.buildin !== undefined ) buildin = opts.buildin;
  if ( opts.cwd !== undefined ) cwd = opts.cwd;
};