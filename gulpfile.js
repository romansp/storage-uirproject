var gulp = require('gulp');
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
  var remotePath = '/storage.uirproject.ru/www/';
  var conn = ftp.create({
    host: 'u461958.ftp.masterhost.ru',
    user: args.user,
    password: args.password,
    parallel: 5,
    log: gutil.log
  });
  gulp.src(['./src/**/*'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});