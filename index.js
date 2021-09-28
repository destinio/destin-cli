#!/usr/bin/env node
import { clear } from './utils/clear.js';
import { log } from './utils/log.js';
import chalk from 'chalk';

clear();

// WELCOME
log(chalk.cyan.bold("\n\n\nHello, I'm Destin 👋"));
log(`
I'm a Software Developer. Talent Manager. Code Whisperer

https://destin.io
https://github.com/destinio
https://codepen.io/destinio

`);

// FREE TIME
log(chalk.bold.yellow('In my free time I:'));
log(`
👨‍👩‍👦‍👦 Hang with the familee
🎲 Play board games
🍝 Cook amazing meals
📖 Read
☯️  Practice Zen
`);

// LEARNING
log(chalk.bold.yellow('🌱 I’m currently learning'));
log(`
Rails - https://github.com/destinio/rails-demo
`);

// WORKING ON
log(chalk.bold.yellow('🔭 I’m currently working on'));
log(`
Learning the ways of the Fullstack Dev
`);

// FUN FACTS
log(chalk.bold.yellow('⚡️ Fun facts'));
log(`
Currenly reading through the extended Dark Tower series (currently on Wolves of the Calla) 🐺
Father of two 👨‍👩‍👦‍👦
I can solve a Rubix Cube in under a minute
Kicked cancer's ass and have been cancer free for two years 🩸
\n`);

// FARWELL
log(chalk.bold.redBright('More soon 😎\n\n✌️\n'));

// EXPORTS
export { clear, log };
