const gulp = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
const config = require('../config');
const webpackWatchTask = () =>
  gulp
    .src(`${config.path.assets}/js/*.js`)
    .pipe(webpack(require('../../webpack.config')(process.env.NODE_ENV)))
    .pipe(gulp.dest(`${config.path.build}/assets/js`))
    .pipe(browserSync.stream());

gulp.task('webpack', webpackWatchTask);
