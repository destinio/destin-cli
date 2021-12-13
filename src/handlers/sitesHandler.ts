import inquirer from 'inquirer'
import { exec } from 'child_process'

function open(url: string) {
  const start =
    process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open'
  exec(start + ' ' + url)
}

async function sitesHandler() {
  const { site } = (await inquirer.prompt([
    {
      type: 'list',
      name: 'site',
      message: 'Select a site to visit 🚀',
      choices: ['destin.io', 'linkedIn', 'GitHub', 'exit'],
      default: 'destin.io',
    },
  ])) as { site: string }

  switch (site.toLowerCase()) {
    case 'linkedin':
      open('https://www.linkedin.com/in/destinlee/')
      break
    case 'github':
      open('https://github.com/destinio')
      break
    case 'destin.io':
      open('https://destin.io')
      break
    default:
      console.log('Have a good one :)')
      break
  }
}

export { sitesHandler }
