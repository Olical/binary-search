var gulp = require('gulp');
var mocha = require('gulp-mocha');
var benchmark = require('gulp-bench');

gulp.task('benchmark', function () {
    return gulp.src('benchmark/binarySearch.js', { read: false })
        .pipe(benchmark());
});

gulp.task('test', function () {
    return gulp.src('test/binarySearch.js', { read: false })
        .pipe(mocha())
        .on('error', keepCalmAndCarryOn);

    function keepCalmAndCarryOn(err) {
        console.error(err);
        this.emit('end');
    }
});

gulp.task('test-watch', ['test'], function () {
    return gulp.watch(['src/binarySearch.js', 'test/binarySearch.js'], ['test']);
});

gulp.task('default', ['test']);
