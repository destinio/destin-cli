import { prompt } from 'inquirer';

/**
 * Takes in process.argv[2], first input after app name
 * @param argv string - process.argv[2]
 */
async function appHandler(argv: String) {
  switch (argv) {
    case '-h':
      console.log('help');
      break;
    case '-t':
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
      console.log(`${argv} is not an options`);
      break;
  }
}

export { appHandler };
