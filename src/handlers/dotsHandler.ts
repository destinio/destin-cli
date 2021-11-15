import chalk from 'chalk'
import { existsSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'

import { dotfiles } from '../files/dots/index.js'

const choices = Object.keys(dotfiles)

function copyFile(a: string, file: string) {
  console.log(
    `${chalk.bold.hex('#91E47A').inverse(` Creating: `)} .${chalk.hex('#FFE774').bold(a)}`
  )
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
      default: false,
    },
  ])) as AnswearType

  const { options } = answears

  const optionsMap = new Map(Object.entries(dotfiles))

  options.forEach(async (a: string) => {
    const file = optionsMap.get(a)

    if (existsSync(process.cwd() + `/.${a}`)) {
      const confirm = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'override',
          message: `.${a} already exists are you sure you want to override?`,
        },
      ])

      const { override } = confirm

      if (override) {
        file ? copyFile(a, file) : console.log(`Error creating .${a}`)
      } else {
        console.log('have a good day')
      }
    } else {
      file ? copyFile(a, file) : console.log(`Error creating .${a}`)
    }
  })
}

export { dotsHandler }
