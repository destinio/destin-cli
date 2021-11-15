import { FlagsType } from '../../index.js'
import { dotsHandler } from './dotHandlerHandler.js'
import { tsHandler } from './tsHandler.js'

async function flagsHandler({ ts, dots }: FlagsType) {
  ts && tsHandler()
  dots && dotsHandler()
}

export { flagsHandler }
