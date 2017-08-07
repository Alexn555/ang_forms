var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    Builder = require('systemjs-builder'),
    inlineNg2Template = require('gulp-inline-ng2-template');
	
var sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    annotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
    stripComments = require('gulp-strip-json-comments');

	
gulp.task('bundle', ['bundle-app', 'bundle-dependencies'], function(){});


gulp.task('inline-templates', function () {
    return gulp.src('app/**/*.ts')
        .pipe(inlineNg2Template({ useRelativePaths: true, indent: 0, removeLineBreaks: true}))
        .pipe(tsc({
            "target": "ES5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": true,
            "noImplicitAny": false
        }))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('bundle-app', ['inline-templates'], function() {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('', 'src/systemjs.config.dist.js');

    return builder
        .bundle('dist/app/**/* - [@angular/**/*.js] - [rxjs/**/*.js]', 'dist/app.bundle.js', { minify: true})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

gulp.task('bundle-dependencies', ['inline-templates'], function() {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('', 'src/systemjs.config.dist.js');

    return builder
        .bundle('dist/app/**/*.js - [dist/app/**/*.js]', 'dist/dependencies.bundle.js', { minify: true})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});



// ------- Build SCSS to CSS -------- 

var config = {
  sourceDir: './src/',
  bowerDir: './bower_components',
  nodeDir: './node_modules', 
  publicDir: './dist',
};

gulp.task('fonts', function() {
  return gulp.src([
    config.nodeDir + '/bootstrap-sass/assets/fonts/**/*',
  ])
  .pipe(gulp.dest(config.sourceDir + config.publicDir + '/fonts'));
});

gulp.task('bootstrap:js', function() {
  return gulp.src([
    config.nodeDir + '/jquery/dist/jquery.min.js',
    config.nodeDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
  ])
  .pipe(concat('bundle.js'))
  .pipe(uglify('bundle.js', {
    compress: true,
    outSourceMap: true,
  }))
  .pipe(gulp.dest(config.sourceDir + config.publicDir + '/bootstrap'));
});

//combine JS Files into core.js
gulp.task('bundle:js', function() {
    gulp.src(config.sourceDir + config.publicDir+'/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(annotate()) // makes angular safe to minify
        .pipe(uglify()) // minifies the concatenated js file.
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(config.sourceDir + config.publicDir + '/bundle'));
});

gulp.task('scss', function() {
  return gulp.src(config.sourceDir + 'scss/app.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    //outputStyle: 'compressed',
    includePaths: [config.nodeDir + '/bootstrap-sass/assets/stylesheets'],
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(stripComments())
  .pipe(gulp.dest(config.sourceDir + config.publicDir + '/css'));
});

gulp.task('scss:watch', function () {
    gulp.watch(config.sourceDir + 'scss/**/*.scss', ['scss']);
});

gulp.task('build:css', ['scss', 'bootstrap:js', 'fonts']);


