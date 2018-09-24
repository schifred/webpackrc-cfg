'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
let npm = exports.npm = 'npm';
let buildin = exports.buildin = false;

function config(opts = {}) {
  if (opts.npm !== undefined) exports.npm = npm = opts.npm;
  if (opts.buildin !== undefined) exports.buildin = buildin = opts.buildin;
};