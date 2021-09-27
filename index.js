#!/usr/bin/env node
import { clear } from './utils/clear.js';
import chalk from 'chalk';

clear();

console.log(chalk.cyan.bold("\n\n\nHello, I'm Destin 👋"));
console.log(`
I'm a Software Developer. Talent Manager. Code Whisperer
https://destin.io
`);
console.log(chalk.bold.yellow('In my free time I:'));
console.log(`
👨‍👩‍👦‍👦 Hang with the familee
🎲 Play board games
🍝 Cook amazing meals
📖 Read
☯️ Practice Zen
`);
console.log(chalk.bold.yellow('🌱 I’m currently learning'));
console.log(`
Rails - https://github.com/destinio/rails-demo
`);
console.log(chalk.bold.yellow('🔭 I’m currently working on'));
console.log(`
- Learning the ways of the Fullstack Dev
`);
console.log(chalk.bold.yellow('⚡️ Fun facts'));
console.log(`
Currenly reading through the extended Dark Tower series (currently on Wolves of the Calla) 🐺
Father of two 👨‍👩‍👦‍👦
I can solve a Rubix Cube in under a minute
Kicked cancer's ass and have been cancer free for two years 🩸
\n`);
console.log(chalk.bold.redBright('More soon 😎\n\n✌️\n'));

export { clear };
