import CouchPotatoAPI from 'couchpotato-api';
import chalk from 'chalk';

import config from '../config.js';

let couchpotato;
function cp() {
  if (!couchpotato) {
    const conf = config('couchpotato');

    couchpotato = new CouchPotatoAPI({
      hostname: conf.HOSTNAME,
      apiKey: conf.API_KEY,
      port: conf.PORT
    });
  }

  return couchpotato;
}

export default async function() {
  try {
    await cp().get('renamer.scan', {});
    console.log(chalk.green('Success!'), 'Scan queued.');
  } catch (e) {
    console.error(chalk.red('Error') + ':', e.message);
  }
}
