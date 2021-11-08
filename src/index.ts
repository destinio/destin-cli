#!/usr/bin/env node

import { appHandler } from './handlers/appHandler';
import { welcomeHandler } from './handlers/welcomeHandler';
import { clear } from './utils/clear';

function program() {
  if (!process.argv[2]) {
    clear();
    welcomeHandler();
  } else {
    appHandler(process.argv[2]);
  }
}

program();
