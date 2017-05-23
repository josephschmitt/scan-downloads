import SonarrAPI from 'sonarr-api';
import chalk from 'chalk';

import config from '../config.js';

let sonarr, conf;
function getSonarr() {
  if (!sonarr) {
    conf = config('sonarr');

    sonarr = new SonarrAPI({
      hostname: conf.HOSTNAME,
      port: conf.PORT || null,
      ssl: conf.SSL === true,
      apiKey: conf.API_KEY || null,
      username: conf.username || null,
      password: conf.password || null
    });
  }

  return sonarr;
}

/**
 * Performs the API request to start the episode scan.
 * @returns {Promise}
 */
export default async function() {
  return getSonarr().post('command', {
    name: 'DownloadedEpisodesScan',
    path: conf.SCAN_PATH || null,
    downloadClientId: conf.DOWNLOAD_CLIENT_ID || null,
    importMode: conf.IMPORT_MODE || null
  });
}
