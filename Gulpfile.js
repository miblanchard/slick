'use strict';
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');
const notify = require('gulp-notify');
const gzip = require('gulp-gzip');

const b = watchify(browserify({
  entries: './src/main.jsx',
  cache: {},
  packageCache: {},
  debug: true,
  require: ['react', 'react-dom'],
}));

gulp.task('watch:js', bundle);
b.on('update', bundle);

function bundle() {
  return b
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify('./dist/')))
    // .pipe(streamify(gzip({ append: true })))
    .pipe(gulp.dest('./'))
    .pipe(notify('Built Bundle'));
}

gulp.task('nodemon', serve);

function serve() {
  nodemon({
    script: 'server/server.js',
    ignore: ['client/', 'build/'],
  });
}


gulp.task('default', ['watch:js', 'nodemon']);
