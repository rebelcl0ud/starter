const gulp = require('gulp');

gulp.task('printName', function() {
	console.log('jo')
})

gulp.task('printAge', function() {
	console.log('30')
})

gulp.task('default',['printName', 'printAge'])