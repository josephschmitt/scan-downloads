import RadarrAPI from 'sonarr-api'; // Until they get their own package
import chalk from 'chalk';

import config from '../config.js';

let radarr;
function getRadarr() {
  if (!radarr) {
    const conf = config('radarr');

    radarr = new RadarrAPI({
      hostname: conf.HOSTNAME,
      apiKey: conf.API_KEY,
      port: conf.PORT
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
    downloadClientId: 'nzoid'
  });
}
