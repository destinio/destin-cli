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
    flags: {
      welcome: {
        type: 'boolean',
        default: true,
        alias: '2',
      },
      ts: {
        type: 'boolean',
        default: false,
        alias: 't',
      },
    },
  })

  if (mainCli.flags.welcome) {
    mainHandler()
  } else {
    flagsHandler(mainCli.flags)
  }
})()
