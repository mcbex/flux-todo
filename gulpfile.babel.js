// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

'use strict';

import watchify from 'watchify';
import browserify from 'browserify';
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import assign from 'object-assign';
import browserSync from 'browser-sync';
import babelify from 'babelify';
import reactify from 'reactify';
import sass from 'gulp-sass';

// add custom browserify options here
const customOpts = {
  entries: ['./src/js/app.js'],
  debug: true
};

const opts = assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts)); 

// add transformations here
// i.e. b.transform(coffeeify);
b.transform(babelify);
b.transform(reactify);

const bundle = () => {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist/js'));
}

b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

gulp.task('bundle', bundle);
gulp.task('default', bundle);
gulp.task('sass', () => {
    gulp.src('src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('watch', () => {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/css/*.css', ['css']);
});
gulp.task('serve', () => {
    browserSync({
        port: 3000,
        files: ['dist/js/bundle.js', 'dist/css/*.css'],
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['watch', 'sass', 'bundle', 'serve']);
