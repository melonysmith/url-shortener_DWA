// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');
const fs = require('fs');
require('log-timestamp');

// chalk rule
const cons = chalk.magenta;

function logIt(info) {
  if (process.env.DEBUG) {
    fs.appendFile('./logs/log.txt', '\n' + info + '\n', () => {
    });
  }
}

// create debug export
exports.debug = (title, obj, status) => {
  const output = title;
  if (!status) {
    /* eslint-disable no-param-reassign */
    status = '';
    /* eslint-enable no-param-reassign */
  }
  if (process.env.DEBUG === 'true') {
    /* eslint-disable no-console */
    console.log(cons(output, obj, status));
    /* eslint-enable no-console */
  }
};

// export log
exports.logIt = logIt;
