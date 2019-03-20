const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const browserSync = require('browser-sync');
const config = require('../config/index');

const watchTask = () => {
  gulp.watch([`${config.path.templates}/**/*.{html,htm}`], () => {
    gulpSequence('templates', browserSync.reload);
  });
  gulp.watch([`${config.path.assets}/sass/**/*.{sass,scss}`], () => {
    gulp.start('sass');
  });
  gulp.watch([`${config.path.assets}/img/**/*.{jpg,jpeg,png,svg,gif}`], () => {
    gulp.start('images');
  });
};

gulp.task('watch', watchTask);
