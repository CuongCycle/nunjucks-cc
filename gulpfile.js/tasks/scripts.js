const gulp = require('gulp');
const config = require('../config');
const scriptsTask = () =>
  gulp.src(`${config.path.assets}/js/lib/*.js`).pipe(gulp.dest(`${config.path.build}/assets/js`));

gulp.task('scripts', scriptsTask);
