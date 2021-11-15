import inquirer from 'inquirer'
import { dotsHandler, sitesHandler, tsHandler } from './index.js'

const choices = [
  {
    type: 'choice',
    name: 'exit',
    value: 'exit',
  },
  {
    type: 'choice',
    name: 'Alist of Destin websites',
    value: 'sites',
  },
  {
    type: 'choice',
    name: 'TypeScript configs',
    value: 'ts',
  },
  {
    type: 'choice',
    name: 'See dotfiles for your zsh world',
    value: 'dots',
  },
]

async function appHandler() {
  const { main } = await inquirer.prompt([
    {
      type: 'list',
      name: 'main',
      message: 'What can I help you with?',
      choices,
      default: 'exit',
    },
  ])

  console.log(main)

  switch (main) {
    case 'ts':
      tsHandler()
      break
    case 'dots':
      dotsHandler()
      break
    case 'sites':
      sitesHandler()
      break
    default:
      break
  }
}

export { appHandler }
