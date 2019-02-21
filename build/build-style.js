const gulp = require('gulp');
const less = require('gulp-less');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixerConfig = require('./sections/autoprefixerConfig');

gulp.task('compile', () => {
  return gulp
    .src(['../es/**/style/index.less', '../lib/**/style/index.less'])
    .pipe(less({javascriptEnabled: true}))
    .pipe(postcss([autoprefixerConfig]))
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')));
});

gulp.task('dist', () => {
  return gulp
    .src(['../src/index.less'])
    .pipe(less({javascriptEnabled: true}))
    .pipe(postcss([autoprefixerConfig]))
    .pipe(csso())
    .pipe(gulp.dest('../dist'));
});

gulp.task('default', gulp.series(['compile', 'dist']));
