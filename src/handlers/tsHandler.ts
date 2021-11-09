import { readFileSync } from 'fs'
import inquirer from 'inquirer'

async function tsHandler() {
  const tsCli = await inquirer.prompt([
    {
      name: 'ts',
      type: 'list',
      choices: ['node', 'react'],
      message: 'Type of TsConfig',
      default: 'node',
    },
  ])

  const { ts } = tsCli

  switch (ts) {
    case 'node':
      // const file = readFileSync()
      console.log(process)
      break

    default:
      break
  }
}

export { tsHandler }
