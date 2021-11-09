import { existsSync, readFileSync } from 'fs'
import inquirer from 'inquirer'
import { clear } from '../utils/clear.js'

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
      const filePath = process.cwd() + '/tsconfig.json'

      if (existsSync(filePath)) {
        console.log('already file')
      } else {
        console.log('create file')
      }

      // const file = readFileSync(filePath, { encoding: 'utf8' })
      // clear()
      // console.log(file)
      break

    default:
      break
  }
}

export { tsHandler }
