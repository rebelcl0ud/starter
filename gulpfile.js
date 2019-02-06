const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// gulp.task('printName', function() {
// 	console.log('jo')
// })

// gulp.task('printAge', function() {
// 	console.log('30')
// })

// sass
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      // cascade: false
    }))
    .pipe(gulp.dest('./public/css'));
});



gulp.task('default',['sass'], function() {
	gulp.watch('./src/scss/**/*', ['sass']);
})