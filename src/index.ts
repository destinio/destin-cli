#!/usr/bin/env node
import meow from 'meow'
import { flagsHandler, mainHandler } from './handlers/index.js'
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
      --sites, -s    See relative links
  `

  const mainCli = meow(helperText, {
    importMeta: import.meta,
    booleanDefault: undefined,
    flags: {
      sites: {
        type: 'boolean',
        default: false,
        alias: 's',
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
