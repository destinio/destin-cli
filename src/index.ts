#!/usr/bin/env node
import meow from 'meow'
import { flagsHandler } from './handlers/flagsHandler.js'
import { mainHandler } from './handlers/mainHandler.js'
/**
 * npx destin
 * @author Destin Lee
 *
 * Learn more at https://destin.io
 */
;(async function () {
  const helperText = `Helper Text`

  const mainCli = meow(helperText, {
    importMeta: import.meta,
  })

  const flags = Object.keys(mainCli.flags).length === 0 ? false : mainCli.flags

  if (!flags) {
    mainHandler()
  } else {
    flagsHandler(flags)
  }
})()
