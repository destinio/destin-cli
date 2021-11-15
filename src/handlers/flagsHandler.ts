import { FlagsType } from '../../index.js'
import { dotsHandler } from './dotHandlerHandler.js'
import { siteHandler } from './siteHandler.js'
import { tsHandler } from './tsHandler.js'

async function flagsHandler({ ts, dots, site }: FlagsType) {
  ts && tsHandler()
  dots && dotsHandler()
  site && siteHandler()
}

export { flagsHandler }
