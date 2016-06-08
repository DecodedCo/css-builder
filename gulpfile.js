var gulp = require('gulp');
var tasks = require('./gulp-tasks');
var util = require('util');

var c = global.config = {};

c.siteDir = './public';
c.outputDir = './public';

c.cssDir = util.format('%s/styles', c.siteDir);
c.css = util.format('%s/**/*.css', c.cssDir);

Object.keys(tasks).forEach(function (name) {
    gulp.task(name, tasks[name]);
});

gulp.task('watch', function () {
    gulp.watch([c.css], ['css']);
});

gulp.task('build', ['css']);
