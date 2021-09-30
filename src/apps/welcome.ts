import { clear } from '../utils/clear.js';
import { log } from '../utils/log.js';

import { header, links } from '../utils/semantics';
import { greenHex } from '../utils/colors';

/**
 * Main welcome functions - start
 */
function welcome() {
  clear();
  header('Welcome to the Destin Lee Resume CLI');
  log(`I'm a Software Developer. Talent Manager. Code Whisperer`);
  header('You can learn more at the following sites', greenHex);
  links([{ text: 'GitHub', link: 'https://github.com/destinio', hex: greenHex }]);
}

export { welcome };
