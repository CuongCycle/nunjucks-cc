const gulp = require('gulp');
const del = require('del');
const config = require('../config');

const cleanTask = () => del([`${config.path.build}/**/*.html`, `${config.path.build}/assets/**`]);

gulp.task('clean', cleanTask);
