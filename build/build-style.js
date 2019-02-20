const gulp = require('gulp');
const less = require('gulp-less');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const autoprefixerConfig = autoprefixer({
  remove: false,
  browsers: ['Android >= 4.0', 'iOS >= 7']
})

gulp.task('compile', () => {
  return gulp
    .src(['../es/**/style/index.less', '../lib/**/style/index.less'])
    .pipe(less())
    .pipe(postcss([autoprefixerConfig]))
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')));
});

gulp.task('dist', () => {
  return gulp
    .src(['../src/index.less'])
    .pipe(less())
    .pipe(postcss([autoprefixerConfig]))
    .pipe(csso())
    .pipe(gulp.dest('../dist'));
});

gulp.task('default', ['compile', 'dist']);
