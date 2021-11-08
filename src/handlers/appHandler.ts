import { clear } from 'console';
import { prompt } from 'inquirer';
import { welcomeHandler } from './welcomeHandler';

/**
 *
 * @param arg string
 */
async function appHandler(arg: String) {
  switch (arg) {
    case 'welcome':
      clear();
      welcomeHandler();
      break;
    case 'ts':
      const main = await prompt([
        {
          type: 'list',
          name: 'ts',
          message: 'What kinda ts thinger you wantz?',
          choices: ['node', 'react'],
        },
      ]);

      console.log(main);
      break;
    default:
      break;
  }
}

export { appHandler };
