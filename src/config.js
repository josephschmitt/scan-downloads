import config from 'node-confenv';
import path from 'path';
import args from './lib/cliArgs'

/**
 * Reads the configuration file for a particular app.
 *
 * @param {String} [app] -- Application to load the config for. If none is provided, it'll, try
 *     reading a generic .env file instead.
 * @returns {Object} -- Object with the configuration settings for the app.
 */
export default function(app) {
  const filename = `.env${app ? '.' + app : ''}`;
  config.read(filename);

  if (!config) {
    throw new Error('Configuration for ' + chalk.cyan(app) + ' not found.');
  } else if (config.get('API_KEY') === 'api_key_goes_here') {
    throw new Error('Please update the API_KEY in the .env file for ' + chalk.cyan(app));
  }

  return config.getAll();
}
