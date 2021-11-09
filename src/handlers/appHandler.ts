import inquirer from 'inquirer'
import { tsHandler } from './tsHandler.js'
import { dotsHandler } from './dotHandlerHandler.js'

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
    case 'dots':
      dotsHandler()
      break
    default:
      break
  }
}

export { appHandler }
