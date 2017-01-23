// URL Shortener by Melony Smith

/* eslint-disable no-console */

// dependencies
const chalk = require('chalk');

// chalk rule
const success = chalk.gray;

// debug function
exports.debug = (title) => {
  const separator = '\n>-------------------------------------------------------<\n';
  const output = `--< DEBUG=true >-- ${title}`;
  if (process.env.DEBUG) {
    console.log(success(output, separator));
  }
};
