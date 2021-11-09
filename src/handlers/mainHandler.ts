import inquirer from 'inquirer'

import { clear } from '../utils/clear.js'
import { appHandler } from './appHandler.js'
import { welcome } from '../components/welcome.js'

/**
 * @function mainHandler
 * @async
 */
async function mainHandler() {
  clear()
  welcome()

  const { main } = await inquirer.prompt([
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

export { mainHandler }
