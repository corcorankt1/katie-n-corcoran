var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	return gulp.src(['/js/angular.min.js', '/js/angular-route.min.js', '/js/app.js', '/js/controllers.js', '/js/views.js'])
	.pipe(concat(main.js))
	.pipe(gulp.dest(/js/));
});