# Trigger download folder scan for Sonarr, Radarr, and Couch Potato

Simple script that uses the [Sonarr](http://sonarr.tv) and [Couch Potato](https://couchpota.to)
(and [Radarr](http://radarr.video)) APIs to trigger scanning of the downloads folder. This is useful
if you use Sonarr or Couch Potato for file renaming, but have another process you need to run in
between downloading and renaming (such as transmuxing through something like iFlicks or Handbrake).
This will allow you to do your extra processing, then when complete call this script which will tell
the app to kick off its renaming process.

## Usage

Simply call the script, passing the `--app` flag to tell it which scan to kickoff.

```sh
./scan-downloads.js --app=couchpotato
./scan-downloads.js --app=sonarr
./scan-downloads.js --app=radarr # Preliminary support

# Supports scanning multiple apps at a time
./scan-downloads.js --app=sonarr,radarr
```

## Configuration

You should update the `config/default.json` file to configure your server environments. There are
three json keys: one for `couchpotato`, one for `sonarr`, and one for `radarr`. Just replace the
defaults with the information that points to your servers, and then run the script.

## Binary Packages

If you don't want to have to install or configure NodeJS on your server that runs the script, you
have the option of packaging up the script into a binary. First make sure to correctly configure the
`config/default.json` file. Then, in your terminal, simply run `npm run pkg`. When it's done, you'll
see a `pkg/` directory with binaries for Windows, Mac, and Linux, which you can then put on your
server. The config files are packaged inside the binaries, so the binary file is all that needs to
go on the server.

```sh
./scan-downloads-macos --app=sonarr
```
