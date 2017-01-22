// URL Shortener by Melony Smith

// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const util = require('./lib/debug.js');
const chalk = require('chalk');

// chalk rule
const active = chalk.magenta;

require('dotenv').config();

// instantiate express
const app = express();

// set port
const port = process.env.PORT || 3000;

// express uses bodyParser
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// express uses routes directory
app.use('/', require('./routes')(express));

// set up server
exports.server = app.listen(port, () => {
  util.debug(active('Still on like Donkey Kong on Port', port));
});

// export server
module.exports = app;
