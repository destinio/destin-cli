import { clear } from 'console'
import { prompt } from 'inquirer'
import { welcomeHandler } from './welcomeHandler'

async function appHandler() {
  const { main } = await prompt([
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
      const main = await prompt([
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
