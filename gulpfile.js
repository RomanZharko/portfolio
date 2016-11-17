var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uncss = require('gulp-uncss');

gulp.task('sass', function(){
	gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./scss/**/*.scss', ['sass']);
});