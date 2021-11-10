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
      --dots, -d    dotfiles for your home dir

    Examples:
      npx destin --ts
      npx destin --dots
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
      dots: {
        type: 'boolean',
        default: false,
        alias: 'd',
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
