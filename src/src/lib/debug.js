// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');

// chalk rule
const cons = chalk.magenta;

// create debug export
exports.debug = (title, obj, status) => {
  const seperator = '\n>--------------------------------------------------<\n';
  const output = seperator + title + seperator;
  if (!status) {
    status = "";
  }
  if (process.env.DEBUG == 'true') {
    console.log(cons(output, obj, status));
  }
};
