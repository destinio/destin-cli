import { clear } from 'console'
import inquirer from 'inquirer'
import { welcome } from '../components/welcome.js'
import { tsHandler } from './tsHandler.js'

async function appHandler() {
  const { main } = await inquirer.prompt([
    {
      type: 'list',
      name: 'main',
      message: 'What can I help you with?',
      choices: ['exit', 'ts', 'dots'],
      default: 'exit',
    },
  ])

  switch (main) {
    case 'ts':
      tsHandler()
      break
    default:
      break
  }
}

export { appHandler }
