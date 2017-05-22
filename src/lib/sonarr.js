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

export default async function() {
  try {
    await getSonarr().post('command', {
      name: 'DownloadedEpisodesScan',
      downloadClientId: 'nzoid'
    });

    console.log(chalk.green('Success!'), 'Scan queued.');
  } catch (e) {
    console.error(chalk.red('Error'), ':', e);
  }
}
