var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

gulp.task("styles", function(){
	return gulp.src('./source/scss/*.scss')
		   .pipe(sass())
		   .pipe(gulp.dest('./dist/css/'));
});

gulp.task("html", function(){
	return gulp.src('./source/*.html')
		   .pipe(htmlmin({collapseWhitespace: true}))
		   .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
	gulp.watch('./source/scss/*.scss',['styles']);
	gulp.watch('./source/*.html',['html']);
});