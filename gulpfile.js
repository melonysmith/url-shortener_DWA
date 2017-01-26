const gulp = require('gulp');
const git = require('gulp-git');
const edit = require('gulp-json-editor');
// do not edit - Andres' code below
const argv = require('yargs').argv;
// do not edit - Andres' code below
const fs = require('fs');

const packjson = require('./package.json');
const util = require('./src/lib/util');
const vbumper = require('./src/lib/vbumper');

// do not edit - Andres' code below
const version = packjson.version.split('.');
// do not edit - Andres' code below
const number = argv.n;

/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

// **********
// code submitted by Andres -- can edit above
  // Conditional to evaluate argument are passed and correct
if ((argv.v === 'major' || argv.v === 'minor' || argv.v === 'patch') && typeof argv.n === 'number') {
/* eslint-disable max-len */
  if (argv.v === 'major') {
    version[0] = number;
  } else if (argv.v === 'minor') {
    version[1] = number;
  } else if (argv.v === 'patch') {
    version[2] = number;
  }

  // Store and write new version
  packjson.version = version.join('.');
  fs.writeFile('./package.json', JSON.stringify(packjson, null, 4), (err) => {
    if (err) {
      return console.log(err);
    }
    // Success message
    console.log(argv.v, ' has been updated to ', argv.n);
  });
} else {
  // Error message
  console.log('Please verify your arguments.');
}
// end of code submitted by Andres -- can edit below
// **********
module.exports = vbumper;

// git add new and edited files
gulp.task('add', () => {
  return gulp.src('./')
  .pipe(git.add({ args: '-A' }));
});

// git commit added files
gulp.task('commit', () => {
  return gulp.src('./')
  .pipe(git.commit('commit...'));
});

// git push committed files to feature branch
gulp.task('featPush', ['add', 'commit'], () => {
  git.push('origin', 'feature', (err) => {
    if (err) throw err;
  });
});

// git push committed files to master branch
gulp.task('mastPush', ['add', 'commit'], () => {
  git.push('origin', 'master', (err) => {
    if (err) throw err;
  });
});

// bump PATCH of current version
gulp.task('patch', () => {
  gulp.src('./package.json')
    .pipe(edit({
      version: util.vbumper(packjson.version, 'patch'),
    }))
    .pipe(gulp.dest('./'));
});

// bump MINOR of current version
gulp.task('minor', () => {
  gulp.src('./package.json')
  .pipe(edit({
    version: util.vbumper(packjson.version, 'minor'),
  }))
  .pipe(gulp.dest('./'));
});

// bump MAJOR of current version
gulp.task('major', () => {
  gulp.src('./package.json')
  .pipe(edit({
    version: util.vbumper(packjson.version, 'major'),
  }))
  .pipe(gulp.dest('./'));
});
