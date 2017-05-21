import dotenv from 'dotenv';
import path from 'path';

import args from './lib/cliArgs';

export default function() {
  const filename = `.env${args.app ? '.' + args.app : ''}`;

  const config = dotenv.config({
    path: path.resolve(__dirname, '..', filename)
  }).parsed;

  if (!config) {
    throw new Error('Configuration for ' + chalk.cyan(args.app) + ' not found.');
  } else if (config.API_KEY === 'api_key_goes_here') {
    throw new Error('Please update the API_KEY in the .env file for ' + chalk.cyan(args.app));
  }

  return config;
}
