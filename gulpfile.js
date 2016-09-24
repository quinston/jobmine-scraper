const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');
const gulp = require('gulp');

gulp.task('pre-test', [], function () {
	return gulp.src(['src/!(tests)/**/*.js'])
	// Covering files
		.pipe(istanbul())
	// Force `require` to return covered files
		.pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
	return gulp.src('src/tests/**/*.js')
		.pipe(mocha())
		.pipe(istanbul.writeReports({
		}))
});


