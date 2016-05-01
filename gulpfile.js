(function setupGulp() {

  'use strict';

  let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    config = require('./package.json');

  gulp.task('build', buildJs);

  function buildJs() {

    gulp
      .src([
        './src/index.js',
        './src/**/*.js'
      ])
      .pipe(uglify())
      .pipe(concat(config.main))
      .pipe(gulp.dest('.'));

  }

}());
