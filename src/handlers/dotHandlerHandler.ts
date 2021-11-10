import { writeFileSync } from 'fs'
import inquirer from 'inquirer'

import { editorconfig } from '../files/dots/index.js'

const choices = ['editorconfig', 'aliases', 'functions']

function copyFile(a: string, file: string) {
  console.log(a)
  writeFileSync(`${process.cwd()}/.${a}`, file)
}

interface AnswearType {
  options: string[]
}

async function dotsHandler() {
  const answears = (await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'options',
      choices,
      message: 'Which dotfiles would you like to copy?',
    },
  ])) as AnswearType

  const { options } = answears

  options.forEach(a => {
    switch (a) {
      case 'editorconfig':
        console.log('creating editorconfig')
        copyFile(a, editorconfig)
        break
      default:
        console.log('Sorry that is not supported yet')
        break
    }
  })
}

export { dotsHandler }
