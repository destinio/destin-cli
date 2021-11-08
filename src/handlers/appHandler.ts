import { clear } from 'console'
import inquirer from 'inquirer'
import { welcome } from '../utils/welcome.js'

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
      const main = await inquirer.prompt([
        {
          type: 'list',
          name: 'ts',
          message: 'What kinda ts thinger you wantz?',
          choices: ['node', 'react'],
        },
      ])

      console.log(main)
      break
    default:
      break
  }
}

export { appHandler }
