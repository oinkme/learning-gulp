'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');
	// Cuando hay errores, no detiene a Gulp
	// plumber = require('gulp-plumber');

// Convirtiendo esto: on('error', console.error.bind(console)) en function
function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

// Gulp Connect
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload())
    .pipe(livereload());
});

gulp.task('scripts', function() {
	gulp.src('js/*.js')
		.on('error', errorLog)
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

// Compiles Sass
gulp.task('styles', function() {
    return sass('scss/style.scss')
    	// Otra manera de manejar errores, sin pumbler
    	.on('error', errorLog)
    	.pipe(gulp.dest('css/'))
    	.pipe(livereload());
});

// Watch
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['styles']);
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('index.html', ['html']);
});


// Default
gulp.task('default', ['scripts', 'styles', 'watch', 'connect']);


