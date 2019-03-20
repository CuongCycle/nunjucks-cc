const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const defaultTasks = cb => {
  process.env.NODE_ENV === 'production'
    ? gulpSequence('clean', ['scripts', 'sass', 'images', 'fonts', 'templates'], 'webpack', cb)
    : gulpSequence('clean', ['scripts', 'sass', 'images', 'fonts', 'templates'], 'browserSync', 'watch', 'webpack', cb);
};

gulp.task('default', defaultTasks);
