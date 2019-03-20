const gulp = require('gulp');
const config = require('../config/');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const changed = require('gulp-changed');
const destPath = `${config.path.build}/assets/img`;
const imagesTask = () => {
  gulp
    .src(`${config.path.assets}/img/**/*.{jpg,jpeg,png,svg,gif,ico}`)
    .pipe(changed(destPath))
    .pipe(
      imagemin({
        optimizationLevel: 3,
        interlaced: true,
        progressive: true,
      })
    )
    .pipe(gulp.dest(destPath))
    .pipe(browserSync.stream());
};

gulp.task('images', imagesTask);
