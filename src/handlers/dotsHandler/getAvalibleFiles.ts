import { URL } from 'url'
import fs from 'fs-jetpack'

/**
 *
 * @returns Promise string[] - Array of avalible file names
 */
async function getAvalibleFiles() {
  try {
    const files = await fs.listAsync(new URL('./dots', import.meta.url).pathname)

    if (!files) {
      throw new Error('No Files found')
    }

    const regex = new RegExp(/\.map/)

    return files.filter(f => !regex.test(f)).map(f => f.split('.')[0])
  } catch (error) {
    throw new Error('Something went wrong with getAvalibleFiles')
  }
}

export { getAvalibleFiles }
