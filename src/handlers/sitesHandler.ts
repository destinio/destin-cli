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
      choices: ['destin.io', 'linkedIn', 'GitHub'],
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
    default:
      open('https://destin.io')
      break
  }
}

export { sitesHandler }
