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
 * optimize before handling image or fonts
 */
gulp.task('build', ['clean'], function(done) {
    runsequence('optimize', 'images', 'fonts', 'languages', function() {
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

gulp.task('inject', ['copy_index'], function(done) {
    log('Wire up css into the html, after files are ready');

    runsequence('wiredep', 'styles', 'templatecache', 'inject_css', done);
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

/**
 * Inject all the spec files into the specs.html
 * @return {Stream}
 */
gulp.task('build-specs', ['templatecache'], function() {
    log('building the spec runner');

    var wiredep = require('wiredep').stream;
    var templateCache = [
        config.temp + config.templateCache.html.file,
        config.temp + config.templateCache.svg.file
    ];
    var options = config.getWiredepDefaultOptions();
    var specs = config.specs;

    if (args.startServers) {
        specs = [].concat(specs, config.serverIntegrationSpecs);
    }
    options.devDependencies = true;

    return gulp
        .src(config.specRunner)
        .pipe(wiredep(options))
        .pipe(inject(config.js, '', config.jsOrder))
        .pipe(inject(config.testlibraries, 'testlibraries'))
        .pipe(inject(config.specHelpers, 'spechelpers'))
        .pipe(inject(specs, 'specs', ['**/*']))
        .pipe(inject(templateCache, 'templates'))
        .pipe(gulp.dest(config.client));
});
