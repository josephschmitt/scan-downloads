import SonarrAPI from 'sonarr-api';
import chalk from 'chalk';

import config from '../config.js';

let sonarr, conf;
function getSonarr() {
  if (!sonarr) {
    conf = config('sonarr');

    sonarr = new SonarrAPI({
      hostname: conf.hostname,
      port: conf.port || null,
      ssl: conf.ssl === true,
      apiKey: conf.apiKey || null,
      username: conf.username || null,
      password: conf.password || null,
      urlBase: conf.urlBase || null
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
    path: conf.path || null,
    downloadClientId: conf.downloadClientId || null,
    importMode: conf.importMode || null
  });
}
