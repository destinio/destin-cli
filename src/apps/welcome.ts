import { clear } from '../utils/clear.js';
import { log } from '../utils/log.js';

import { bold } from 'chalk';
/**
 * #### Main Welcome app
 */
function welcome() {
  clear();
  // WELCOME
  log(bold.cyanBright("\nHello, I'm Destin 👋"));

  log(`
💻 I'm a Software Developer. Talent Manager. Code Whisperer

https://destin.io
https://github.com/destinio
https://codepen.io/destinio
  `);

  // FREE TIME
  log(bold.yellow('In my free time I:'));
  log(`
👨‍👩‍👦‍👦 Hang with the familee
🎲 Play board games
🍝 Cook amazing meals
📖 Read
☯️  Practice Zen
  `);

  // LEARNING
  log(bold.yellow('🌱 I’m currently learning'));
  log(`
🚊 Rails - https://github.com/destinio/rails-demo
  `);

  // WORKING ON
  log(bold.yellow('🔭 I’m currently working on'));
  log(`
📦 Learning the ways of the Fullstack Dev
  `);

  // FUN FACTS
  log(bold.yellow('⚡️ Fun facts'));
  log(`
🐺 Currenly reading through the extended Dark Tower series (currently on Wolves of the Calla)
👨‍👩‍👦‍👦 Father of two
🧮 I can solve a Rubix Cube in under a minute
🩸 Kicked cancer's ass and have been cancer free for two years
  `);

  // FARWELL
  log(bold.redBright('More soon 😎\n'));
}

export { welcome };
