import { clear } from '../utils/clear.js'
import { log } from '../utils/log.js'

import { header, links, list } from '../utils/semantics.js'
import { blueHex, greenHex, orangeHex, redHex, yellowHex } from '../utils/colors.js'

const myLinks = [
  { text: 'Website', link: '\thttps://destin.io', hex: orangeHex },
  { text: 'LinkedIn', link: '\thttps://www.linkedin.com/in/destinlee/', hex: blueHex },
  { text: 'GitHub', link: '\thttps://github.com/destinio', hex: greenHex },
  { text: 'CodePen', link: '\thttps://codepen.io/destinio', hex: yellowHex },
]

const freeTime = [
  'Hang with the familee',
  'Play board games',
  'Cook amazing meals (BBQ)',
  'Read (The Dark Tower)',
  'Practice Zen',
]

/**
 * Main welcome functions - start
 */
function welcome() {
  clear()
  header('Welcome to the Destin Lee Resume CLI')
  log(`Husband, Father of two, Software Developer. Talent Manager. Code Whisperer`)
  header('You can learn more at the following sites', greenHex)
  links(myLinks)
  header(`When I'm not working I like to:`)
  list(freeTime)
  header(`Currently working on:`, yellowHex)
  list(['JS CLI automation', 'NextJS Website'])
  header(`Currently learning:`, orangeHex)
  list(['Advanced TypeScript'])
  log('')
  header('If you need any free resources see below:')
}

export { welcome }
