import SonarrAPI from 'sonarr-api';
import chalk from 'chalk';

import config from '../config.js';

let sonarr;
function getSonarr() {
  if (!sonarr) {
    const conf = config('sonarr');

    sonarr = new SonarrAPI({
      hostname: conf.HOSTNAME,
      apiKey: conf.API_KEY,
      port: conf.PORT
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
    downloadClientId: 'nzoid'
  });
}
