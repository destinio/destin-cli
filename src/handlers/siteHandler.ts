import open from 'open'
import inquirer from 'inquirer'

async function siteHandler() {
  const { site } = await inquirer.prompt([
    {
      type: 'list',
      name: 'site',
      message: 'Which destin info site would you like to visit',
      choices: ['destin.io', 'linkedin', 'github'],
      default: 'desdtin.io',
    },
  ])

  console.log(site)

  switch (site) {
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

export { siteHandler }
