import { clear } from '../utils/clear.js'
import { welcome } from '../components/welcome.js'

/**
 * @function mainHandler
 * @async
 */
async function mainHandler() {
  clear()
  welcome()
}

export { mainHandler }
