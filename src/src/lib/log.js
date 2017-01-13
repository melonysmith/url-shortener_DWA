// URL Shortener by Melony Smith

// dependencies
const fs = require('fs');
const chalk = require('chalk');

// chalk rule
const saved = chalk.yellow;

function log (info) {
  const log  = console.log(info);
  fs.writeFile('./logs/log.txt', info, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(saved('Saved!'));
    }
  })
};

// export log
module.exports = log;
