#!/usr/bin/env node

import { prompt } from 'inquirer'
import { appHandler } from './handlers/appHandler'
import { welcomeHandler } from './handlers/welcomeHandler'
import { clear } from './utils/clear'

async function mainHandler() {
  const { main } = await prompt([
    {
      type: 'list',
      name: 'main',
      message: 'Looking for more?',
      choices: ['exit', 'yes'],
      default: 'exit',
    },
  ])

  if (main === 'yes') {
    appHandler()
  }
}

async function program() {
  if (!process.argv[2]) {
    clear()
    welcomeHandler()
    mainHandler()
  } else {
    mainHandler()
  }
}

program()
