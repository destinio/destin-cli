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
  const helperText = `
    Usage:
      npx destin [option]

    Options:
      --ts, -t      Helpful Typescript resources

    Examples:
      npx destin --ts
  `

  const mainCli = meow(helperText, {
    importMeta: import.meta,
    booleanDefault: undefined,
    flags: {
      ts: {
        type: 'boolean',
        default: false,
        alias: 't',
      },
    },
  })

  const flags = mainCli.flags
  let areFlag = false

  // There should be a better way to see if no
  // flags were set
  for (const flag in flags) {
    if (flags[flag]) {
      areFlag = !areFlag
    }
  }

  // if no flags run welcome handler with welcome
  // message
  if (!areFlag) {
    mainHandler()
  } else {
    flagsHandler(mainCli.flags)
  }
})()
