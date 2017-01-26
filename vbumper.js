// Requires
const packjson = require('../../package.json');

const fs = require('fs');

// Store arguments, package.json version and argument number
const argv = require('yargs').argv;

const version = packjson.version.split('.');
const number = argv.n;

/* eslint-disable func-names */
const vbumper = function () {
  // Conditional to evaluate argument are passed and correct
  if ((argv.v === 'major' || argv.v === 'minor' || argv.v === 'patch') && typeof argv.n === 'number') {
    if (argv.v === 'major') {
      version[0] = number;
    } else if (argv.v === 'minor') {
      version[1] = number;
    } else if (argv.v === 'patch') {
      version[2] = number;
    }

  // Store and write new version
    packjson.version = version.join('.');
    /* eslint-disable consistent-return */
    fs.writeFile('./package.json', JSON.stringify(packjson, null, 4), (err) => {
      /* eslint-enable consistent-return */
      if (err) {
        /* eslint-disable no-console */
        return console.log(err);
      }
      // Success message
      console.log(argv.v, ' has been updated to ', argv.n);
    });
  } else {
    // Error message
    console.log('Please verify your arguments.');
  }
};

module.exports.vbumper = vbumper;
