#!/usr/bin/env node

// WELCOME APP
import { welcome } from './apps/welcome';
import { Command } from 'commander';
import { clear } from './utils/clear';
import chalk = require('chalk');
import { header } from './utils/semantics';

const program = new Command();

program.version('0.1.0');

program.option('-t, --ts', 'create tsconfig thingers');

program.parse(process.argv);

if (!process.argv[2]) {
  welcome();
} else {
  const { ts } = program.opts();

  if (ts) {
    clear();
    header(` Welcome to the TS app `);
  }
}
