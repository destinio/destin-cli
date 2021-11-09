import { copyFileSync, existsSync } from 'fs'
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

  const filePath = './tsconfig.json'

  function copyFile() {
    try {
      copyFileSync(filePath, process.cwd() + '/tsconfig.json')
    } catch (error) {
      console.log(error)
    }
  }

  switch (ts) {
    case 'node':
      if (existsSync(filePath)) {
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

      // clear()
      // console.log(file)
      break

    default:
      break
  }
}

export { tsHandler }
