'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-renname');
var changed = require('gulp-changed');

/* SCSS */

var SCSS_SRC = './src/scss/**/*.scss';
var SCSS_DEST = './src/css';

/* TASK names */
/* Compile SCSS */
gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifycss())
    .pipe(rename({suffix:'.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

});

/* Detect changes in SCSS */
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

/* Run tasks */
gulp.task('default', ['watch_scss']);

/* CMD commands */
/* 
gulp  ('default task')

*/
