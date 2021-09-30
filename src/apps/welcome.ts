import { clear } from '../utils/clear.js';
import { log } from '../utils/log.js';

import { h1 } from '../utils/chalk';
import { greenHex } from '../utils/colors.js';

/**
 * Main welcome functions - start
 */
function welcome() {
  clear();
  h1('Welcome to the Destin Lee Resume CLI');
  log(`I'm a Software Developer. Talent Manager. Code Whisperer`);
  h1('You can learn more at the following sites', greenHex);
}

export { welcome };
