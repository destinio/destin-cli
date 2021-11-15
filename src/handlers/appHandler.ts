import inquirer from 'inquirer'
import { tsHandler } from './tsHandler.js'
import { dotsHandler } from './dotHandlerHandler.js'
import { siteHandler } from './siteHandler.js'

const choices = [
  {
    type: 'choice',
    name: 'exit',
    value: 'exit',
  },
  {
    type: 'choice',
    name: 'See websites',
    value: 'sites',
  },
  {
    type: 'choice',
    name: 'See Tyepscript configs',
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
      siteHandler()
      break
    default:
      break
  }
}

export { appHandler }
