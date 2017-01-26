/* URL Shortener with Utility Tools:
   Debug with Logging and Version Bump
   by Melony Smith
*/

/* eslint-disable no-console */

// require chalk for adding color to CLI display
const chalk = require('chalk');

// function for debug utility
function debug(msg, path, level) {
  // if the environmental variable DEBUG is equal to true...
  if (process.env.DEBUG === 'true') {
    // ...require fs to write and append messages to log file...
    const fs = require('fs');
    // ...to add date to messages...
    const date = new Date();
    // ...make level of message uppercase...
    let msgLevel = level;
    // ...path the message comes from...
    let msgOrigin = path;
    // ...
    let msgContent = msg;

    // if there is no path specified...
    if (!msgOrigin) {
      // ...return no specified path
      msgOrigin = 'No specified path';
    }

    // if there is no message given...
    if (!msgContent) {
      // .. return no message
      msgContent = 'No message';
    }

    // format of returned message
    const msgFormat = `[${date}] \n filePath: ${path} returns: '${msgContent}' \n\n`;

    // switch
    // if message level is error...
    switch (msgLevel) {
      case 'E':
      case 'ERR':
      case 'ERROR':
        msgLevel = 'ERROR';
        // ...display this
        console.error(chalk.red(msgLevel, ' ', msgFormat));
        break;
      // if message level is warning...
      case 'W':
      case 'WARN':
      case 'WARNING':
        msgLevel = 'WARNING';
        // ...display this
        console.warn(chalk.yellow(msgLevel, ' ', msgFormat));
        break;
      // if message level is success...
      case 'S':
      case 'SUCCSS':
        msgLevel = 'SUCCESS';
        // ...display this
        console.log(chalk.green(msgLevel, ' ', msgFormat));
        break;
      // default message (alert)...
      default:
        msgLevel = 'ALERT';
        // ...display this
        console.log(chalk.blue(msgLevel, ' ', msgFormat));
        break;
    }

    // create and append file
    const logFile = './logs/logFile.log';
    fs.appendFile(logFile, msgLevel, ' ', msgFormat, (err) => {
      if (err) throw err;
    });
  }
}

// export debug
exports.debug = debug;
