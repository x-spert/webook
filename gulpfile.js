var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

/**
 * Build the Site
 */
gulp.task('build', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('_site'));
});

/**
 * Rebuild html & do page reload
 */
gulp.task('rebuild', ['build'], function () {
  browserSync.reload();
});

/**
 * Wait for build, then launch the Server
 */
gulp.task('browser-sync', ['styles', 'browserify', 'build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Compile files from _scss into _site/css (for live injecting) 
 */
gulp.task('styles', function () {
  return gulp.src('./assets/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
});

/**
 * Browserify task
 */
gulp.task('browserify', function() {
    return browserify('./assets/js/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./_site/assets/js/'));
});

gulp.task('browserifynew', function() {
    return gulp.src('./assets/js/app.js')
        .pipe(gulp.dest('./_site/assets/js/'));
});

/**
 * Rebuild html & do page reload
 */
gulp.task('rebuild2', ['browserify'], function () {
  browserSync.reload();
});

/**
 * Watch scss files for changes & recompile
 * Watch html file, build & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['styles']);
  gulp.watch('./assets/js/**/*.js', ['rebuild2']);
  gulp.watch('index.html', ['rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
