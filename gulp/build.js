var gulp = require('gulp');
var del = require('del');
var args = require('yargs').argv;
var log = require('./log.js');
var inject = require('./inject.js');
var runsequence = require('run-sequence');

var config = require('./gulp.config.js');

var $ = require('gulp-load-plugins')({
    lazy: true
});

/**
 * Build everything
 * This is separate so we can run tests on
 * optimize before handling image
 */
gulp.task('build', ['clean', 'config'], function(done) {
    runsequence('optimize', 'images', 'languages', function() {
        del.sync(config.temp);
        done();
    });
});

/**
 * Wire-up the bower dependencies
 * @return {Stream}
 */
gulp.task('wiredep', function() {
    log('Wiring the bower dependencies into the html');

    var wiredep = require('wiredep').stream;
    var options = config.getWiredepDefaultOptions();

    // Only include stubs if flag is enabled
    var js = args.stubs ? [].concat(config.js, config.stubsjs) : config.js;

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(inject(js, '', config.jsOrder))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['config', 'copy_index'], function(done) {
    log('Wire up css into the html, after files are ready');

    runsequence('wiredep', 'styles', 'templatecache', 'svg_icons', 'inject_css', 'inject_svg_icons', done);
});

gulp.task('inject-dev', ['config', 'copy_index'], function(done) {
    log('Wire up css into the html, after files are ready');

    runsequence('wiredep', 'styles', 'svg_icons', 'inject_svg_icons', 'inject_css', done);
});

gulp.task('inject_svg_icons', function() {
    return gulp
        .src(config.index)
        .pipe(inject(config.temp + config.templateCache.svg.file, 'templates'))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject_css', function() {
    return gulp
        .src(config.index)
        .pipe(inject(config.css))
        .pipe(gulp.dest(config.client));
});

gulp.task('copy_index', function() {
    return gulp
        .src(config.index_src)
        .pipe($.rename('index.html'))
        .pipe(gulp.dest(config.client));
});
