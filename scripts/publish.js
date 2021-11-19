#!/usr/bin/env node

import { loadJsonFile } from 'load-json-file'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { exec } from 'child_process'
import gradient from 'gradient-string'
import ora from 'ora'

function clear() {
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H')
}

;(async () => {
  const preVersion = await loadJsonFile(`${process.cwd()}/package.json`).version

  clear()

  const { bump } = await inquirer.prompt([
    {
      type: 'list',
      name: 'bump',
      message: `Current version: ${preVersion}. Select:`,
      choices: ['patch', 'minor', 'major'],
      default: 'patch',
    },
  ])

  exec(`npm version ${bump}`, (error, stdout, _stderr) => {
    if (error) {
      console.log(chalk.redBright.bold('Git working directory not clean.'))
      return
    }

    const publishSpinner = ora(`${gradient.rainbow('Publishing')}`).start()
    publishSpinner.spinner = 'fingerDance'

    exec('npm publish', (error, stdout, _stderr) => {
      if (error) {
        console.log(`${chalk.redBright.bold('🤔 hummm something went wrong')}`)
        return
      }
      publishSpinner.text = `${stdout} has been published`
      publishSpinner.succeed()
    })
  })
})()
