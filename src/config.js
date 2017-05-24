import config from 'config';

/**
 * Reads the configuration file for a particular app.
 *
 * @param {String} [app] -- Application to load the config for. If none is provided, it'll, try
 *     reading a generic .env file instead.
 * @returns {Object} -- Object with the configuration settings for the app.
 */
export default function(app) {
  const conf = config.get(`scan-downloads.${app}`);

  if (!conf) {
    throw new Error('Configuration for ' + chalk.cyan(app) + ' not found.');
  } else if (config.apiKey === 'api_key_goes_here') {
    throw new Error('Please update the apiKey in the config json file for ' + chalk.cyan(app));
  }

  return conf;
}
