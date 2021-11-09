import { tsHandler } from './tsHandler.js'

async function flagsHandler(flags: any) {
  const { ts } = flags

  ts && tsHandler()
}

export { flagsHandler }
