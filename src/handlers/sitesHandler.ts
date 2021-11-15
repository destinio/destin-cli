import open from 'open'
import inquirer from 'inquirer'

async function sitesHandler() {
  let siteName: string

  const { site } = await inquirer.prompt([
    {
      type: 'list',
      name: 'site',
      message: 'Select a site to visit 🚀',
      choices: ['destin.io', 'linkedIn', 'GitHub'],
      default: 'destin.io',
    },
  ])

  siteName = site

  switch (siteName.toLowerCase()) {
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
