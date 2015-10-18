var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
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
 * Copy images
 */
gulp.task('images', function () { 
  return gulp.src('./assets/img/**/*.*')
    .pipe(gulp.dest('./_site/assets/img/'));
});

/**
 * Copy fonts
 */
gulp.task('fonts', function () { 
  return gulp.src('./assets/font/*.*')
    .pipe(gulp.dest('./_site/assets/font/'));
});

/**
 * Copy video
 */
gulp.task('video', function () { 
  return gulp.src('./assets/video/*.*')
    .pipe(gulp.dest('./_site/assets/video/'));
});

/**
 * Copy audio
 */
gulp.task('audio', function () { 
  return gulp.src('./assets/audio/*.*')
    .pipe(gulp.dest('./_site/assets/audio/'));
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
    .pipe(plumber())
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

gulp.task('mediaelement', function() {
    return gulp.src('./assets/js/mediaelement-and-player.min.js')
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
gulp.task('default', ['images', 'fonts', 'video', 'audio', 'mediaelement', 'browser-sync', 'watch']);
