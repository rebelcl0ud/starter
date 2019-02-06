const gulp = require('gulp');
const sass = require('gulp-sass');

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
    .pipe(gulp.dest('./public/css'));
});

// gulp.task('default',['printName', 'printAge'])