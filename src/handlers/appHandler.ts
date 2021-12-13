import inquirer from 'inquirer'
import { sitesHandler } from './index.js'

const choices = [
  {
    type: 'choice',
    name: 'A list of Destin websites',
    value: 'sites',
  },
  {
    type: 'choice',
    name: 'exit',
    value: 'exit',
  },
]

async function appHandler() {
  const { main } = await inquirer.prompt([
    {
      type: 'list',
      name: 'main',
      message: 'What can I help you with?',
      choices,
      default: 'sites',
    },
  ])

  switch (main) {
    case 'sites':
      sitesHandler()
      break
    default:
      break
  }
}

export { appHandler }
