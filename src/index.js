import chalk from 'chalk';
import path from 'path';

import args from './lib/cliArgs.js';

import couchpotato from './lib/couchpotato.js';
import radarr from './lib/radarr.js';
import sonarr from './lib/sonarr.js';

/**
 * Run the completed downloads scan for a specific app.
 *
 * @param {String} app -- Name of the app to run the scan for.
 */
async function scan(app) {
  try {
    if (app === 'couchpotato') {
      await couchpotato();
    } else if (app === 'radarr') {
      await radarr();
    } else if (app === 'sonarr') {
      await sonarr();
    } else {
      console.error('Invalid app name:', chalk.cyan(app));
    }
    console.log(chalk.green('Success!'), chalk.cyan(app), 'scan queued.');
  } catch (e) {
    console.error(chalk.red('Error') + ':', chalk.cyan(app), e.message);
  }
}

// Run scanner for the app or app(s)
(args.app || '').split(',').forEach((app) => scan(app.trim()));
