import { FlagsType } from '../../index.js'
import { dotsHandler, sitesHandler, tsHandler } from './index.js'

async function flagsHandler({ ts, dots, sites }: FlagsType) {
  ts && tsHandler()
  dots && dotsHandler()
  sites && sitesHandler()
}

export { flagsHandler }
