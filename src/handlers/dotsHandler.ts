import inquirer from 'inquirer'
import { URL } from 'url'
import fs from 'fs-jetpack'

async function getAvalibleFiles() {
  const humm = new URL('../../dist/files/dots', import.meta.url).pathname
  console.log(fs.list(humm))
}

getAvalibleFiles()

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

// export { dotsHandler }
