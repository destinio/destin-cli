import chalk from 'chalk'
import ora from 'ora'
import superb from 'superb'
import { existsSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'

import { dotfiles } from '../files/dots/index.js'
import { blueHex } from '../utils/colors.js'

const choices = Object.keys(dotfiles)

// function copyFile(a: string, file: string) {
//   console.log(
//     `${chalk.bold.hex('#91E47A').inverse(` Creating: `)} .${chalk.hex('#FFE774').bold(a)}`
//   )
//   writeFileSync(`${process.cwd()}/.${a}`, file)
// }

interface CpInfo {
  file: string
}

function copyFilePromise(a: string, file: string, timeout: number) {
  const currentTimeout = timeout === 0 ? 1000 : timeout * 1000 + 1000
  return new Promise((resolve, _reject) => {
    const spinner = ora(`Analyzing .${a}`).start()
    spinner.spinner = 'fingerDance'

    setTimeout(() => {
      spinner.text = `Created ${chalk.hex(blueHex).bold(`.${a}`)} that was ${superb.random()}`
      writeFileSync(`${process.cwd()}/.${a}`, file)
      spinner.succeed()
      resolve({ file: `${a}` })
    }, currentTimeout)
  })
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

  options.forEach(async (a: string, i: number) => {
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
        file ? await copyFilePromise(a, file, i) : console.log(`Error creating .${a}`)
      } else {
        console.log('have a good day')
      }
    } else {
      file ? await copyFilePromise(a, file, i) : console.log(`Error creating .${a}`)
    }
  })
}

export { dotsHandler }
