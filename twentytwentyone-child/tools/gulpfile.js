/*
* run "npm install" to install all dependencies from package.json or run those manually:
npm install gulp gulp-sass gulp-concat gulp-uglify-es gulp-sourcemaps gulp-autoprefixer gulp-notify --save
*
*/

'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify-es').default,
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
livereload = require('gulp-livereload'),
notify = require('gulp-notify');

var notifyOptions = {
  message : 'Error:: <%= error.message %> \nLine:: <%= error.line %> \nCode:: <%= error.extract %>'
};

/*
* compile theme scss
*/
gulp.task('theme-styles', function(){
  return gulp
  .src('./../assets/sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: ''}).on('error',  notify.onError(notifyOptions)))
  .pipe(autoprefixer())
  .pipe(concat('theme.min.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./../assets/public/'))
  .pipe(livereload());
});

gulp.task('partials-styles', function(){
  return gulp
  .src('./../assets/sass/partials/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: ''}).on('error',  notify.onError(notifyOptions)))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./../assets/public/partials/'))
  .pipe(livereload());
});


/*
* compile theme js
*/
gulp.task('theme-scripts', function() {
  return gulp
  .src('./../assets/js/*.js')
  .pipe(concat('theme.min.js'))
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./../assets/public/'))
  .pipe(livereload());
});

gulp.task('partials-scripts', function() {
  return gulp
  .src('./../assets/js/partials/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./../assets/public/partials/'))
  .pipe(livereload());
});

/* run task for continuous track of theme scss files */
gulp.task('default', function(){
  livereload.listen();
  // track general scss styles
  gulp.watch(
    [
    './../assets/sass/**/*.scss',
    '!./../assets/sass/partials',
    '!./../assets/sass/utilities'
  ], 
  { 
    usePolling: true 
  },  
  gulp.series('theme-styles')
  );

  // track only partials scss files
  gulp.watch('./../assets/sass/partials/*.scss', { usePolling: true },  gulp.series('partials-styles'));  
  
  // recompile all styles if basic scss is changed
  gulp.watch('./../assets/sass/utilities/*.scss', { usePolling: true },  gulp.series('theme-styles','partials-styles'));



  gulp.watch('./../assets/js/*.js',   gulp.series('theme-scripts'));
  gulp.watch('./../assets/js/partials/*.js',   gulp.series('partials-scripts'));
});