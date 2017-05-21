import chalk from 'chalk';
import path from 'path';

import args from './lib/cliArgs.js';
import couchpotato from './lib/couchpotato.js';
import sonarr from './lib/sonarr.js';

const {app} = args;

if (app === 'couchpotato') {
  couchpotato();
} else if (app === 'sonarr') {
  sonarr();
} else {
  console.error('Invalid app name:', chalk.cyan(app));
}
