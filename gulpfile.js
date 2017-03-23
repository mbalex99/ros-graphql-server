var gulp = require('gulp');
var ts = require("gulp-typescript");
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var mocha = require('gulp-mocha');
var util = require('gulp-util'); ``
var tsProject = ts.createProject('tsconfig.json');
var tscConfig = require('./tsconfig.json');

gulp.task('clean', function (cb) {
    console.log('cleaning');
    return del('dist', cb)
})
gulp.task('build', ['clean'], function () {
    var tsResult = gulp.src("./src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
    return tsResult.js.pipe(gulp.dest('./dist'));
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