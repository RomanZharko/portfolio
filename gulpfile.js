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

gulp.task('min', function(){
	gulp.src('libs/bootstrap-grid.min.css')
		.pipe(uncss({
			html: ['index.html']
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('libs.min/'));
	gulp.src('libs/linea/styles.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('libs.min/linea/'));
	gulp.src('libs/font-awesome/css/font-awesome.min.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('libs.min/font-awesome/css/'));
	gulp.src('libs/magnific-popup/magnific-popup.css')
		//.pipe(uncss({
		//	html: ['index.html']
		//}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('libs.min/magnific-popup/'));
	gulp.src('libs/animate/animate.min.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('libs.min/animate/'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./scss/**/*.scss', ['sass']);
});