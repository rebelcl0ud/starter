const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


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

// server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./public",
      notify: false,
      // when true opens new window each 'gulp' run
      open: false
    }
  });
});



gulp.task('default',['sass', 'browser-sync'], function() {
	gulp.watch('./src/scss/**/*', ['sass']);
})