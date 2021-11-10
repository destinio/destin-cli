import { dotsHandler } from './dotHandlerHandler.js'
import { tsHandler } from './tsHandler.js'

interface FlagsType {
  dots: boolean
  ts: boolean
}

async function flagsHandler({ ts, dots }: FlagsType) {
  ts && tsHandler()
  dots && dotsHandler()
}

export { flagsHandler }
