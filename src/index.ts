#!/usr/bin/env node

import { prompt } from 'inquirer';
import { welcome } from './apps/welcome';
import { clear } from './utils/clear';
import { header } from './utils/semantics';

async function program() {
  clear();

  if (!process.argv[2]) {
    clear();
    welcome();
  } else {
    const main = await prompt([
      {
        type: 'list',
        name: 'ts',
        message: 'What kinda ts thinger you wantz?',
        choices: ['node', 'react'],
      },
    ]);

    console.log(main);
  }
}

program();
