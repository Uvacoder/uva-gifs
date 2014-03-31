var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./_scss/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./_scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);