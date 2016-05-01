(function setupGulp() {

  'use strict';

  let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./package.json');

  gulp.task('build', buildJs);

  function buildJs() {

    gulp
      .src([
        'src/index.js',
        'src/**/*.js'
      ], {base: 'src'})
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat(config.main))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.'));

  }

}());
