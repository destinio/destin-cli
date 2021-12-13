import { FlagsType } from '../../index.js'
import { sitesHandler } from './index.js'

async function flagsHandler({ sites }: FlagsType) {
  sites && sitesHandler()
}

export { flagsHandler }
