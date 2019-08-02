"use strict";

var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var csso = require("gulp-csso");
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();
var svgSprite = require('gulp-svg-sprite');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');

gulp.task("clean", function () {
    return del("build");
});

gulp.task('pug', function () {
    return gulp.src('source/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload)
});

gulp.task('style', function () {
    return gulp.src('source/sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.reload({
            stream: true
        }))
    // .pipe(server.stream());
});

gulp.task('copyImg', function() {
    return gulp.src("source/img/**/**/**")
        .pipe(gulp.dest("./build/img/"))
});

gulp.task('copyJS', function() {
    return gulp.src("source/js/**/**")
        .pipe(gulp.dest("./build/js/"))
});

    //
    // gulp.task("copy", function() {
    //     return gulp.src([
    //         "fonts/**/*.{woff,woff2}",
    //         "img/**",
    //         "js/**",
    //         "*.html"
    //     ], {
    //         base: "."
    //     })
    //         .pipe(gulp.dest("build"))
    // });

gulp.task("server", function () {
    browserSync.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    // browserSync.watch('build', browserSync.reload)
});


gulp.task('svg', () => {
    return gulp.src('./source/img/svg/icon-*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            shape: {
                dimension: {         // Set maximum dimensions
                    maxWidth: 500,
                    maxHeight: 500
                },
                spacing: {         // Add padding
                    padding: 0
                }
            },
            mode: {
                symbol: {
                    sprite: "../sprite.svg",
                    render: {
                        scss: {
                            dest: '../_sprite.scss',
                            template: './source/sass/_sprite_template.scss'
                        }
                    }
                }
            }

        }))

        .pipe(gulp.dest('./build/img/svg/'));
});


gulp.task("watch", function () {
    gulp.watch("source/**/*.{scss,sass}", gulp.series("style"));
    gulp.watch("source/img/*.{png,jpg}", gulp.series("copyImg"));
    gulp.watch("source/js/*.js", gulp.series("copyJS"));
    gulp.watch("source/img/**/*.svg", gulp.series(["svg", "copyImg"]));
    gulp.watch("source/pug/**/*.pug", gulp.series("pug"));
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'style'),
    gulp.parallel('watch', 'server'),
));
