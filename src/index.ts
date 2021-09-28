#!/usr/bin/env node
import { welcome } from './apps/welcome.js';
import { clear } from './utils/clear.js';
import { log } from './utils/log.js';

welcome();

// EXPORTS
export { clear, log };
