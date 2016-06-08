/**
 * Compiles the CSS.
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var fontMagician = require('postcss-font-magician');
var postcssImport = require('postcss-import');
var postcssSimpleExtend = require('postcss-simple-extend');


module.exports = function () {
    return gulp.src(global.config.cssDir + '/*.css')
        .pipe(postcss([
          postcssImport(),
          postcssSimpleExtend(),
          cssnext({
              autoprefixer: {
                add: true,
                remove: true,
                browsers: ['last 2 versions']
              },
              discardComments: {
                removeAll: true
              },
              safe: true,
              sourcemap: true
            }
          ),
          fontMagician({
            aliases: {
              'sans-serif': 'Source Sans Pro',
              'serif': 'Source Serif Pro',
              'monospace': 'Source Code Pro'
            }
          })
        ]))
        .pipe(gulp.dest(global.config.outputDir + '/css'));
};
