// URL Shortener by Melony Smith

/* eslint-disable no-console */

const chalk = require('chalk');
const fs = require('fs');

const error = chalk.white;

exports.debug = (title, obj, status) => {
  const seperator = '\n>--------------------------------------------------<\n';
  const output = seperator + title + seperator;
  if (!status) {
    status === '';
  }
  if (process.env.DEBUG === 'true') {
    console.log(error(output), obj, status);
  }
  fs.appendFile('./logs/msg.log', output);
};