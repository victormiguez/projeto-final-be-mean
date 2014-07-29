var gulp       = require('gulp'),
    compass    = require('gulp-compass'),
    browserify = require('gulp-browserify'),
    concat     = require('gulp-concat'),
    browserSync = require('browser-sync'),
    nodemon     = require('gulp-nodemon');


gulp.task('server', function () {
  nodemon({ script: '../app.js', ext: 'js'})
});

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

gulp.task('browserify', function() {
  gulp.src(['../public/js/controllers.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('controllers.js'))
  .pipe(gulp.dest('../public/js/dist'));
});

gulp.task('b-s', function() {
  browserSync.init(['../views/**/*.jade','../public/css'], {
    proxy: 'localhost:3333'
  });
});

gulp.task('default', ['b-s', 'server', 'compass'], function(){
  gulp.watch('../public/sass/**/*.scss', ['compass']);
  gulp.watch(['../public/js/controllers.js', '../public/js/controllers/*.js'], ['browserify']);
})


// gulp.task('watch', function() {
//         if (err) { return console.log(err); }
//         gulp.watch('../public/sass/**/*.scss', ['compass']);
//         gulp.watch(['../public/js/controllers.js', '../public/js/controllers/*.js'], ['browserify']);
//         gulp.watch('../views/**/*.jade', ['jade']);
//     });
// });