#!/usr/bin/env node
import { mainHandler } from './handlers/index.js'
// import yargs from 'yargs-parser'

/**
 * npx destin
 * @author Destin Lee
 *
 * Learn more at https://destin.io
 */
;(async function () {
  // const argv = yargs(process.argv.slice(2))._

  mainHandler()
})()
