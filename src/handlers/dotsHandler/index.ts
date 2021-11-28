import inquirer from 'inquirer'
import { URL } from 'url'
import fs from 'fs-jetpack'

async function getAvalibleFiles() {
  try {
    const { pathname } = new URL('./dots', import.meta.url)
    console.log(pathname)
    const files = await fs.listAsync(pathname)

    if (!files) {
      throw new Error('No Files found')
    }

    const regex = new RegExp(/\.map/)

    return files.filter(f => !regex.test(f)).map(f => f.split('.')[0])
  } catch (error) {
    throw new Error('Something went wrong with getAvalibleFiles')
  }
}

async function dotsHandler() {
  const files = await getAvalibleFiles()
  console.log(files)
}

// import { dotfiles } from '../files/dots/index.js'
// const rawDotFiles = new Map(Object.entries(dotfiles))

// https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop

// interface AnswearType {
//   selectedFiles: string[]
// }

// async function dotsHandler() {
//   const answears = await inquirer.prompt<AnswearType>([
//     {
//       type: 'checkbox',
//       name: 'selectedFiles',
//       choices: Object.keys(dotfiles),
//       message: 'Which dotfiles would you like to copy?',
//       default: false,
//     },
//   ])

//   const { selectedFiles } = answears
// }

export { dotsHandler }
