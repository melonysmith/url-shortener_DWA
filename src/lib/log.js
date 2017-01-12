// URL Shortener by Melony Smith

// dependencies
const fs = require('fs');
const utility = require('../lib/debug');

// create log function
function log(message) {
   utility.debug(message);
   console.log(message);
   fs.writeFileSync('./logs/logFile.txt');
};

// export log
module.exports = log;
