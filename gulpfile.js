'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
// const imagemin = require('gulp-imagemin');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', () => 
  gulp.src('./src/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
);

// gulp.task('imagemin', () =>
//   gulp.src('src/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/images'))
// );
 
gulp.task('sass:watch', () =>
  gulp.watch('./sass/**/*.scss', ['sass'])
);

gulp.task('default', gulp.series('sass:watch'));