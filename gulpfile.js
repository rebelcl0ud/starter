const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
let exec = require('gulp-exec');

// webpack
gulp.task('webpack', function() {
  return gulp.src('*.js', {read: false})
    .pipe(exec('webpack'))
    .pipe(browserSync.stream())
})

// sass
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      // cascade: false
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
});

// minify
gulp.task('sass:minify', () => {
  return gulp.src('./public/css/*.css')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(autoprefixer({
      browsers: ['last 2 versions'],
      // cascade: false
    }))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
});

// server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./public",
      notify: false,
      // when true opens new window each 'gulp' run
      open: false,
    }
  });
});

gulp.task('default',['sass', 'webpack', 'browser-sync'], function() {
	gulp.watch('./src/scss/**/*', ['sass'])
  gulp.watch('./src/js/**/*', ['webpack'])
})

gulp.task('production', ['sass:minify'])




