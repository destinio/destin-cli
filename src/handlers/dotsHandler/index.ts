import inquirer from 'inquirer'
import { getAvalibleFiles } from './getAvalibleFiles.js'

async function dotsHandler() {
  const files = await getAvalibleFiles()
  console.log(files)
}

export { dotsHandler }
