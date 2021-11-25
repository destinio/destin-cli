#!/usr/bin/env node

import { loadJsonFile } from 'load-json-file'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { exec } from 'child_process'
// TODO: https://github.com/sindresorhus/execa
import gradient from 'gradient-string'
import ora from 'ora'

function clear() {
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H')
}

;(async () => {
  async function run() {
    clear()

    const { bump } = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'bump',
          message: `How would you like to bumb the version`,
          choices: ['patch', 'minor', 'major'],
          default: 'patch',
        },
      ])
      .catch(err => {
        console.log(err)
      })

    exec(`npm version ${bump}`, (error, stdout, _stderr) => {
      if (error) {
        console.log(chalk.redBright.bold('Git working directory not clean. Please'))
        return
      }

      const publishSpinner = ora(`${gradient.rainbow('Publishing')}`).start()
      publishSpinner.spinner = 'fingerDance'

      exec('npm publish', (error, stdout, _stderr) => {
        if (error) {
          console.log(`${chalk.redBright.bold(error)}`)
          publishSpinner.fail()
          return new Error(error)
        }
        publishSpinner.text = `${stdout} has been published`
        publishSpinner.succeed()
      })
    })
  }

  exec('git status -s', (error, stdout, _stderr) => {
    if (error) {
      console.log(error)
      return error
    }

    if (!stdout.length) {
      run()
    } else {
      console.error('Somthing went wrong with git')
    }
  })
})()
