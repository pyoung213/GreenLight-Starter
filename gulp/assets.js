var gulp = require('gulp');
var log = require('./log.js');

var config = require('./gulp.config.js');

var $ = require('gulp-load-plugins')({
    lazy: true
});

/**
 * Copy fonts
 * @return {Stream}
 */
gulp.task('fonts', ['clean-fonts'], function() {
    log('Copying fonts');

    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.build + 'fonts'));
});

/**
 * Copy languages
 * @return {Stream}
 */
gulp.task('languages', ['clean-languages'], function() {
    log('Copying languages');

    return gulp
        .src(config.languages)
        .pipe(gulp.dest(config.build + 'languages'));
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', ['clean-images'], function() {
    log('Compressing and copying images');

    return gulp
        .src(config.images)
        .pipe($.imagemin({
            optimizationLevel: 4
        }))
        .pipe(gulp.dest(config.build + 'images'));
});
