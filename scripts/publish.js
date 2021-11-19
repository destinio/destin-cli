#!/usr/bin/env node

import { loadJsonFile } from 'load-json-file'
import inquirer from 'inquirer'
import chalk from 'chalk'
import child_process from 'child_process'
import gradient from 'gradient-string'
import ora from 'ora'
;(async () => {
  const preVersion = await loadJsonFile(`${process.cwd()}/package.json`).version

  const { bump } = await inquirer.prompt([
    {
      type: 'list',
      name: 'bump',
      message: `Current version: ${preVersion}. Select:`,
      choices: ['patch', 'minor', 'major'],
      default: 'patch',
    },
  ])

  child_process.exec(`npm version ${bump}`, (error, stdout, _stderr) => {
    const publishSpinner = ora(`${gradient.rainbow('Publishing')}`).start()
    publishSpinner.spinner = 'fingerDance'

    if (error) {
      console.log(chalk.redBright.bold('Git working directory not clean.'))
      return
    }

    child_process.exec('npm publish', (error, stdout, _stderr) => {
      if (error) {
        console.log(`${chalk.redBright.bold('🤔 hummm something went wrong')}`)
        return
      }
      publishSpinner.text = `${stdout} has been published`
      publishSpinner.succeed()
      // console.log(chalk.greenBright.bold(`${stdout} was published 🚀`))
    })
  })

  // switch (bump) {
  //   case 'minor':
  //     console.log('minor')
  //     child_process.exec('npm version minor')
  //     break
  //   case 'major':
  //     console.log('major')
  //     break
  //   default:
  //     console.log('patch')
  //     break
  // }
})()
