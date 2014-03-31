var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('./_scss/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./_scss/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['scripts']);
});

gulp.task('scripts', function() {
  return gulp.src(['./js/jquery.js', './js/filtertable/*.js'])
    .pipe(concat('./js/scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
});

gulp.task('default', ['sass', 'scripts', 'watch']);