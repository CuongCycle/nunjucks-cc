const gulp = require('gulp');
const config = require('../config/index');
const browserSync = require('browser-sync');
const browserSyncTask = () => {
  browserSync.init({
    server: {
      baseDir: config.path.build,
    },
  });
};

gulp.task('browserSync', browserSyncTask);
