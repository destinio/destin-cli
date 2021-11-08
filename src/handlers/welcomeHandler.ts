import { clear } from '../utils/clear.js';
import { log } from '../utils/log.js';

import { header, links, list } from '../utils/semantics';
import { blueHex, greenHex, orangeHex, redHex, yellowHex } from '../utils/colors';

const myLinks = [
  { text: 'Website', link: '\thttps://destin.io', hex: orangeHex },
  { text: 'GitHub', link: '\thttps://github.com/destinio', hex: greenHex },
  { text: 'CodePen', link: '\thttps://codepen.io/destinio', hex: yellowHex },
  { text: 'LinkedIn', link: '\thttps://www.linkedin.com/in/destinlee/', hex: blueHex },
];

const freeTime = [
  'Hang with the familee',
  'Play board games',
  'Cook amazing meals',
  'Read',
  'Practice Zen',
];

/**
 * Main welcome functions - start
 */
function welcomeHandler() {
  clear();
  header('Welcome to the Destin Lee Resume CLI');
  log(`Husband, Father of two, Software Developer. Talent Manager. Code Whisperer`);
  header('You can learn more at the following sites', greenHex);
  links(myLinks);
  header(`When I'm not working I like to:`);
  list(freeTime);
  header(`Currently working on:`, yellowHex);
  list(['JS CLI automation']);
  header(`Currently learning:`, orangeHex);
  list(['Ruby on Rails']);
  header(`More CLI tools comming soon`, redHex);
  log('');
}

export { welcomeHandler };
