import { existsSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'

import { editorconfig } from '../files/dots/index.js'

const choices = ['editorconfig', 'zshrc', 'aliases', 'functions']

async function dotsHandler() {
  const question = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'options',
      choices,
      message: 'Which dotfiles would you like to copy?',
    },
  ])

  const { options } = question

  console.log(options)

  // function copyFile() {
  //   writeFileSync(process.cwd() + '/tsconfig.json', tsConfigNode)
  // }
}

export { dotsHandler }
