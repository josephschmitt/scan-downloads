import CouchPotatoAPI from 'couchpotato-api';
import chalk from 'chalk';

import config from '../config.js';

let couchpotato, conf;
function cp() {
  if (!couchpotato) {
    conf = config('couchpotato');

    couchpotato = new CouchPotatoAPI({
      hostname: conf.HOSTNAME,
      port: conf.PORT || null,
      ssl: conf.SSL === true,
      apiKey: conf.API_KEY || null,
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
    base_folder: conf.SCAN_PATH || null,
    download_id: conf.DOWNLOAD_ID || null,
    downloader: conf.DOWNLOADER || null
  });
}
