// URL Shortener by Melony Smith

// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const utility = require('./lib/debug');

// require dotenv
require("dotenv").config();

// chalk rules
const active = chalk.magenta;
const envVar = chalk.gray;

// instantiate express
const app = express();

// set port
const port = process.env.PORT || 3000;

// express uses bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// express uses routes directory
app.use('/', require('./routes')(express));

// environmental variable set to
  utility.logIt(envVar('Environmental variable is defined as ' + process.env.DEBUG));

// set up server
const server = app.listen(port, () => {
  utility.logIt(active('STILL on like Donkey Kong on Port ' + port));
});

// export server
module.exports = server;
