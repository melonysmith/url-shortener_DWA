// URL Shortener by Melony Smith

// dependencies
var chalk = require('chalk');

// chalk rule
var success = chalk.gray;

// debug function
exports.debug = (title) => {
  const separator = '\n>-------------------------------------------------------<\n';
  const output = `--< DEBUG=true >-- ${title}`;
  if (process.env.DEBUG) {
    console.log(success(output, separator));
  }
};
