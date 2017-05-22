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

/**
 * Performs the API request to start the renamer scan.
 * @returns {Promise}
 */
export default async function() {
  return cp().get('renamer.scan', {});
}
