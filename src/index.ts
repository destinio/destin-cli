#!/usr/bin/env node

import { prompt } from 'inquirer';
import { appHandler } from './handlers/appHandler';
import { welcomeHandler } from './handlers/welcomeHandler';
import { clear } from './utils/clear';

async function program() {
  if (!process.argv[2]) {
    clear();
    welcomeHandler();

    const { main } = await prompt([
      {
        type: 'list',
        name: 'main',
        message: 'What would you like to do?',
        choices: ['exit', 'ts', 'dots', 'welcome'],
        default: 'exit',
      },
    ]);

    appHandler(main);
  }
}

program();
