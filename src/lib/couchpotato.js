import CouchPotatoAPI from 'couchpotato-api';
import chalk from 'chalk';

import config from '../config.js';

let couchpotato, conf;
function cp() {
  if (!couchpotato) {
    conf = config('couchpotato');

    couchpotato = new CouchPotatoAPI({
      hostname: conf.hostname,
      port: conf.port || null,
      ssl: conf.ssl === true,
      apiKey: conf.apiKey || null,
      username: conf.username || null,
      password: conf.password || null
    });
  }

  return couchpotato;
}

/**
 * Performs the API request to start the renamer scan.
 * @returns {Promise}
 */
export default async function() {
  return cp().get('renamer.scan', {
    base_folder: conf.base_folder || null,
    download_id: conf.download_id || null,
    downloader: conf.downloader || null
  });
}
