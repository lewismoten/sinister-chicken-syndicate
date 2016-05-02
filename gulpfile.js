(function setupGulp() {

  'use strict';

  let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    istanbul = require('gulp-istanbul'),
    jasmine = require('gulp-jasmine'),
    config = require('./package.json'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver');

  gulp.task('build', ['build-raw', 'build-min']);
  gulp.task('build-raw', buildRaw);
  gulp.task('build-min', buildMin);

  gulp.task('test', ['build'], test);
  gulp.task('test-cover', ['build', 'pre-cover'], testCover);
  gulp.task('pre-cover', preCover);

  gulp.task('web', ['build', 'watch'], webStart);
  gulp.task('watch', watchFiles);

  gulp.task('default', ['build']);

  function watchFiles() {

    gulp.watch('src/**/*.js', ['build', 'test']);
    gulp.watch('spec/**/*-spec.js', ['test']);

  }

  function buildMin() {

    return gulp
      .src([
        'src/index.js',
        'src/**/*.js'
      ], {base: 'src'})
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat(config.main.replace('.js', '.min.js')))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.'));

  }

  function buildRaw() {

    return gulp
      .src([
        'src/index.js',
        'src/**/*.js'
      ], {base: 'src'})
      .pipe(sourcemaps.init())
      .pipe(concat(config.main))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.'));

  }

  function preCover() {

    return gulp
      .src(['src/**/*.js'])
      .pipe(istanbul())
      .pipe(istanbul.hookRequire());

  }

  function testCover() {

    return gulp
      .src(['spec/**/*-spec.js'])
      .pipe(jasmine())
      .on('error', swallowError)
      .pipe(istanbul.writeReports())
      .pipe(istanbul.enforceThresholds({thresholds: {global: 90}}));

  }

  function test() {

    return gulp
      .src(['spec/**/*-spec.js'])
      .pipe(jasmine())
      .on('error', swallowError);

  }

  function webStart() {

    return gulp
      .src('.')
      .pipe(webserver({
        livereload:       true,
        directoryListing: true,
        open:             true
      }));

  }

  function swallowError(error) {

    gutil.log(error.toString());
    this.emit('end');

  }

}());
