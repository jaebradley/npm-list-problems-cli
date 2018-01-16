#!/usr/bin/env node

/* eslint no-console: 0 */

import program from 'commander';

import pkg from '../../package.json';
import { findProblems } from '../problemFinder';

program
  .version(pkg.version)
  .description('List NPM Problems')
  .option('-p, --path [path]', 'An optional relative path')
  .option('-t, --types <types>', 'Filtered error types', types => types.split('|'))
  .parse(process.argv);

findProblems(program);
