const gulp = require('gulp');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const browserSync = require('browser-sync');
const config = require('../config');
const sassLintConfig = require('../config/sassLint');
const sassTask = () =>
  gulp
    .src(`${config.path.assets}/sass/main.scss`)
    .pipe(sassLint(sassLintConfig))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${config.path.build}/assets/css`))
    .pipe(browserSync.stream());

gulp.task('sass', sassTask);
