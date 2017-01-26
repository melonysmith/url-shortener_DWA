// URL Shortener by Melony Smith

// dependencies
const Sequelize = require('sequelize');
const chalk = require('chalk');
// const utility = require('../lib/debug');

// require dotenv
require('dotenv').config();

// chalk rule
const dbCon = chalk.white.dim;

// sequelize
// connect to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  });

// authenticate connection
sequelize.authenticate();
/* eslint-disable no-console */
console.log(dbCon('Database connection successful. It\'s goin\' down!'));
/* eslint-enable no-console */

// define URL
const url = sequelize.define('url', {
  originalURL: {
    type: Sequelize.STRING,
  },
  shortURL: {
    type: Sequelize.STRING,
  },
});

// sync
sequelize.sync();

// exports
exports.sequelize = sequelize;
exports.url = url;
