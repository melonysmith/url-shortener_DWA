// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');
const fs = require('fs');
const stamp = require('log-timestamp');

// chalk rule
const saved = chalk.white;
const cons = chalk.magenta;

function logIt (info) {
  if(process.env.DEBUG) {
    // create a variable for console.log
    const log  = console.log(info);
    fs.appendFile('./logs/log.txt', '\n' +  info  + '\n', (err) => {
    });
  };
}

// create debug export
exports.debug = (title, obj, status) => {
  const output = title;
  if (!status) {
    status = "";
  }
  if (process.env.DEBUG == 'true') {
    console.log(cons(output, obj, status));
  }
};

// export log
exports.logIt = logIt;
