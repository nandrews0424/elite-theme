var gulp = require('gulp'),
    gutils = require('gulp-util'),
    less = require('gulp-less');

gulp.task('less', function() {

  console.log('hi');
  gulp.src('./css/main.less')
    .pipe(less({ paths: ['./css'] }))
    .on('error', gutils.log)
    .pipe(gulp.dest('./_site/css'));

});

gulp.task('watch', function() {
  gulp.watch('./css/*', ['less']);
});
