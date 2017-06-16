/* gulpfile.js */
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = {
  src: [
    './src/sass/**/*.scss',
    '!./src/sass/**/_*.scss'
  ],
  dist: './css',
  watch: './src/sass/**/*.scss'
}
gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(gulp.dest(config.dist));
});

gulp.task('default',['sass'], function(){
  gulp.watch(config.watch,['sass']);
});