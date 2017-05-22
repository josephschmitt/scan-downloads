import config from 'node-confenv';
import path from 'path';
import args from './lib/cliArgs'

export default function(app=args.app) {
  const filename = `.env${app ? '.' + app : ''}`;
  config.read(filename);

  if (!config) {
    throw new Error('Configuration for ' + chalk.cyan(app) + ' not found.');
  } else if (config.get('API_KEY') === 'api_key_goes_here') {
    throw new Error('Please update the API_KEY in the .env file for ' + chalk.cyan(app));
  }

  return config.getAll();
}
