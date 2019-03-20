const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config');
const destPath = `${config.path.build}/assets/fonts`;
const fontsTask = () => {
  gulp
    .src(`${config.path.assets}/fonts/**/*`)
    .pipe(changed(destPath))
    .pipe(gulp.dest(destPath));
};

gulp.task('fonts', fontsTask);
