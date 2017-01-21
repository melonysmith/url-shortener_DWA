// Debug Utility Tool with Logging by Melony Smith

// dependencies
const expect = require('chai').expect;
const chalk = require('chalk');
const fs = require('fs');
var util = require('../src/debug.js');

// chalk rule
const success = chalk.green;
const error = chalk.red;
const warn = chalk.yellow;

describe ('debugutil', () => {
  it('test that success has run', () => {
    console.log(success('Success Test: Passed!'));
  });
  it('test that warn has run', () => {
    console.warn(warn('Warn Test: Passed!'));
  });
  it('test that error has run', () => {
    console.error(error('Error Test: Passed!'));
  });
});

fs.appendFile('./logs/logFile.log', function () {
  console.log('Data was appended to file!');
});
