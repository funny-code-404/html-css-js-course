'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const babelify = require("babelify");
const source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// npm i gulp@3.9.1 gulp-sass gulp-livereload @babel/core @babel/preset-env browserify babelify browser-sync vinyl-source-stream gulp-rename vinyl-buffer gulp-imagemin gulp-plumber gulp-notify
// npm -g install gulp
// npm -g install gulp-cli
// npm rebuild node-sass
// 10 Node npm install

// npm i gulp-plumber gulp-notify --save-dev

const path = {
  build: {
    html: 'build/',
    js: 'build/',
    css: 'build/',
    img: 'build/img/',
    fonts: 'build/fonts/',
    root: 'build/',
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/app.js',
    scss: 'src/scss/**/*.scss',
    img: 'src/img/**/*',
    fonts: 'src/fonts/*',
    root: 'src/'
  }
}

const htmlBuild = () => gulp.src(path.src.html).pipe(gulp.dest(path.build.html));

const cssBuild = () => {
  livereload.listen();
  return gulp.src(path.src.scss)
    .pipe(plumber({
      errorHandler: notify.onError(err => ({
        title: 'Styles',
        message: err.message,
      }))
    }))
    .pipe(sass())
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
};

const jsBuild = () => browserify({ entries: [path.src.js] })
  .transform(babelify.configure({
    presets: ["@babel/preset-env"],
    sourceMaps: true,
  }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(path.build.js));

const imgBuild = () => gulp.src(path.src.img)
  .pipe(imagemin())
  .pipe(gulp.dest(path.build.img));

const fontBuild = () => gulp.src(path.src.fonts)
  .pipe(gulp.dest(path.build.fonts));

const watch = () => {
  browserSync.init({
    server: {
      baseDir: path.build.root,
    }
  });
  gulp.watch(path.src.scss, cssBuild).on('change', browserSync.reload);
  gulp.watch(path.src.js, jsBuild).on('change', browserSync.reload);
  gulp.watch(path.src.html, htmlBuild).on('change', browserSync.reload);
};

const build = gulp.parallel(htmlBuild, cssBuild, jsBuild, imgBuild, fontBuild, watch);

gulp.task(build);
gulp.task('default', build);
