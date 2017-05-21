#!/usr/bin/env node

/**
 * Usage: ./scan-downloads.js --app={App Name}
 *
 * The --app flag expects the name of the app for which to start scanning. Acceptable values are
 * 'couchpotato` and 'sonarr`.
 */

// Load and run the app
var bundle = require('./bundle.js');
