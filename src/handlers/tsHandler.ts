import { existsSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import { tsConfigNode } from '../files/index.js'

async function tsHandler() {
  const tsCli = await inquirer.prompt([
    {
      name: 'ts',
      type: 'list',
      choices: ['node'],
      message: 'Type of TsConfig',
      default: 'node',
    },
  ])

  const { ts } = tsCli

  function copyFile() {
    writeFileSync(process.cwd() + '/tsconfig.json', tsConfigNode)
  }

  switch (ts) {
    case 'node':
      if (existsSync('./tsconfig.json')) {
        const confirmOverride = await inquirer.prompt({
          type: 'confirm',
          name: 'confirm',
          message: 'Are you sure you want to override your current tsconfig?',
          default: false,
        })

        confirmOverride.confirm && copyFile()
      } else {
        copyFile()
      }
      break

    default:
      break
  }
}

export { tsHandler }
