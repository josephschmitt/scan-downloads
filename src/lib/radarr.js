import RadarrAPI from 'sonarr-api'; // Until they get their own package
import chalk from 'chalk';

import config from '../config.js';

let radarr, conf;
function getRadarr() {
  if (!radarr) {
    conf = config('radarr');

    radarr = new RadarrAPI({
      hostname: conf.hostname,
      port: conf.port || null,
      ssl: conf.ssl === true,
      apiKey: conf.apiKey || null,
      username: conf.username || null,
      password: conf.password || null,
      urlBase: conf.urlBase || null
    });
  }

  return radarr;
}

/**
 * Performs the API request to start the movies scan.
 * @returns {Promise}
 */
export default async function() {
  return getRadarr().post('command', {
    name: 'DownloadedMoviesScan',
    path: conf.SCAN_PATH || null,
    downloadClientId: conf.DOWNLOAD_CLIENT_ID || null,
    importMode: conf.IMPORT_MODE || null
  });
}
