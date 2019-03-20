const gulp = require('gulp');
const config = require('../config/index');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const fs = require('fs');
const plumber = require('gulp-plumber');
const watch = process.env.NODE_ENV === 'dev' ? true : false;
const getData = file => {
  const jsonData = {};
  Object.assign(jsonData, JSON.parse(fs.readFileSync(file, 'utf-8')));
  return jsonData;
};
const nunjucksRenderOptions = {
  path: config.path.templates,
  envOptions: {
    watch,
    autoescape: false,
  },
};
const templatesTask = () =>
  gulp
    .src(`${config.path.templates}/pages/*.html`)
    .pipe(plumber())
    .pipe(data(getData(`${config.path.data}/global.json`)))
    .pipe(nunjucksRender(nunjucksRenderOptions))
    .pipe(gulp.dest(config.path.build));

gulp.task('templates', templatesTask);
