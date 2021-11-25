import chalk from 'chalk'
import ora from 'ora'
import superb from 'superb'
import { existsSync, fstat, writeFileSync } from 'fs'
import inquirer from 'inquirer'

import { dotfiles } from '../files/dots/index.js'
import { blueHex } from '../utils/colors.js'

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

async function askUserOverride(file: string, a: string, i: number) {
  return new Promise<string>(async (resolve, reject) => {
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

// ===================

async function createDotFiles(filesToCreate: string[]) {
  // CLEAN UP START
  // Promise.all
  // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop

  // NEW
  const rawDotFiles = new Map(Object.entries(dotfiles))

  await Promise.all(
    filesToCreate.map(async fileName => {
      // check if files ex
      if (existsSync(`${process.cwd()}/.${fileName}`)) {
        const { override } = await inquirer.prompt<{ override: Boolean }>({
          type: 'confirm',
          name: 'override',
          default: false,
          message: `.${fileName} already there. Override??`,
        })

        console.log(override)
      } else {
        console.log('it not there')
        writeFileSync(`${process.cwd()}/.${fileName}`, rawDotFiles.get(fileName)!)
      }
      // if file = true ask if they awant to overide
      // else create file
    })
  )
}

interface AnswearType {
  selectedFiles: string[]
}

async function dotsHandler() {
  const answears = await inquirer.prompt<AnswearType>([
    {
      type: 'checkbox',
      name: 'selectedFiles',
      choices: Object.keys(dotfiles),
      message: 'Which dotfiles would you like to copy?',
      default: false,
    },
  ])

  const { selectedFiles } = answears

  await createDotFiles(selectedFiles)

  // OLD
  // options.forEach(async (a: string, i: number) => {
  //   const file = rawDotFiles.get(a)!
  //   const fileProm = await askUserOverride(file, a, i)

  //   promArray.push(fileProm)
  // })

  // const allAnswears = await Promise.all<string>(promArray)
}

export { dotsHandler }
