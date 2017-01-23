// URL Shortener by Melony Smith

/* eslint-disable no-console */

// dependencies
const chalk = require('chalk');
const fs = require('fs');

// chalk rule
const success = chalk.gray;

// debug function
exports.debug = (title) => {
  const separator = '\n>-------------------------------------------------------<\n';
  const output = `--< DEBUG=true >-- ${title}`;
  if (process.env.DEBUG === true) {
    console.log(success(output, separator));
    fs.appendFile('./logs/log.log', title + '\n', () => {
 });
  }
};
