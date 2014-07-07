var gulp    = require('gulp'),
    compass = require('gulp-compass'),
    refresh = require('gulp-livereload'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    server  = require('tiny-lr')();

gulp.task('compass', function() {
    gulp.src('../public/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: '../public/css',
            sass: '../public/sass',
        }))
        .on('error', function(err) {
        })
        .pipe(gulp.dest('../public/css'))
        .pipe(refresh(server));
});

gulp.task('jade', function (){
    gulp.src('../views/**/*.jade')
        .pipe(refresh(server));
})

gulp.task('browserify', function() {
  gulp.src(['../public/js/controllers.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('controllers.js'))
  .pipe(gulp.dest('../public/js/dist'));
});

gulp.task('watch', function() {
    server.listen(35729, function(err) {
        if (err) { return console.log(err); }
        gulp.watch('../public/sass/**/*.scss', ['compass']);
        gulp.watch(['../public/js/controllers.js', '../public/js/controllers/*.js'], ['browserify']);
        gulp.watch('../views/**/*.jade', ['jade']);
    });
});