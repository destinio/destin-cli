#!/usr/bin/env node

import { loadJsonFile } from 'load-json-file'
import inquirer from 'inquirer'
import chalk from 'chalk'
import child_process from 'child_process'
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

  child_process.exec(`npm version ${bump}`, (error, stdout, stderr) => {
    console.log('error', error)
    console.log('stdout', stdout)
    console.log('stderr', stderr)
  })

  const postVersion = await loadJsonFile(`${process.cwd()}/package.json`).version

  console.log(chalk.greenBright.bold(`New Version is ${postVersion}`))

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
