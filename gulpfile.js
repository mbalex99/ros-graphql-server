var gulp = require('gulp');
var tsc = require("gulp-typescript");
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var mocha = require('gulp-mocha');
var util = require('gulp-util'); ``
var tsProject = tsc.createProject("tsconfig.json");
gulp.task('clean', function (cb) {
    console.log('cleaning');
    return del('dist', cb)
})
gulp.task('build', ['clean'], function () {
    var tsResult = gulp.src(["typings/index.d.ts", "src/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', {
            sourceRoot: function (file) { return file.cwd + '/src'; }
        }))
        .pipe(gulp.dest("dist"))
    var viewsResult = gulp.src([
        'src/views/**/*'
    ]).pipe(gulp.dest('dist/views'))
    return [
        tsResult,
        viewsResult
    ]
});
gulp.task('test', function () {
    return gulp.src(['dist/**/*.spec.js'], { read: false })
        .pipe(mocha({ reporter: 'spec', timeout: 10000 }))
        .on('error', util.log)
        .once('end', function () {
            process.exit();
        });
});
gulp.task('default', ['build'], () => {
})