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
 * @returns {String} -- Status message
 */
export async function scan(app) {
  let msg;

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

    msg = `${chalk.green('Success!')} ${chalk.cyan(app)} scan queued.`;
    console.log(msg);
  } catch (e) {
    msg = `${chalk.red('Error')}':' ${chalk.cyan(app)} ${e.message}`;
    console.error(msg);
  }

  return chalk.stripColor(msg);
}

/**
 * Run the completed downloads scan for a specific app or apps.
 *
 * @param {String} apps -- Comma-list of apps
 * @returns Promise.all
 */
export function scanApps(apps) {
  if (!apps && args) {
    apps = args.app
  }

  return Promise.all(apps.split(',').map((app) => scan(app.trim())));
}
