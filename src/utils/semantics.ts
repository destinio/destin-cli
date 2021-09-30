import * as chalk from 'chalk';
import { log } from './log';
import { blackHex, blueHex, greenHex, redHex } from './colors';

// Quick chalk exports - standard colors

/**
 * Quick chalk blue using blueHex from utils/colors
 */
export const blue = chalk.hex(blueHex);
/**
 * Quick chalk green using greenHex from utils/colors
 */
export const green = chalk.hex(greenHex);
/**
 * Quick chalk red using redHex from utils/colors
 */
export const red = chalk.hex(redHex);

// Quick chalk exports - background colors

export const blueBg = chalk.bgHex(blueHex).hex('#000000');

// Semantics

/**
 *
 * @param text string - text to be displayed to the user
 * @param hex  string - hex color to display text in - see utils/colors
 */
export function header(text: string, hex = blueHex) {
  log('');
  log(chalk.bgHex(hex).hex('#000000').bold(` ${text} `));
  log('');
}

/**
 *
 * @param content string - text to be displayed to the user in a dim style;
 */
export function sectionDim(content: string) {
  log(chalk.dim(content));
}

/**
 * Used form links display
 */
interface ListItem {
  text: string;
  link: string;
  hex: string;
}

/**
 *
 * @param items string array - array of strings to display as list
 * ####
 * @example
 * ```
 * {
 *  text: 'GitHub',
 *  link: 'https://somelink.com'
 *  hex: '#123456'
 * }
 * ```
 */
export function links(items: ListItem[]) {
  items.forEach(i => {
    log(`${chalk.bgHex(i.hex).hex(blackHex).bold(` ${i.text} `)} ${chalk.italic.dim(i.link)}`);
  });
}
