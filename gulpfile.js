var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minify = require('gulp-minify');
var minifyCSS = require('gulp-minify-css');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var markdown = require('gulp-markdown');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');
var ifElse = require('gulp-if-else');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

/*파일 경로*/
var src = {};
var path = {};
src.root = "public";
src.dist = src.root + "/dist";
src.scss = src.root + "/scss";
src.js = src.root + "/js";
src.css = src.dist + "/css";
path.scss = src.scss + "/*.scss";
path.js = src.js + "/**/*.js";
path.css = src.css + "/*.css";

path.ignorescss = src.scss + "/aaa_*.scss";


//컴파일
gulp.task("scss:compile", function () {
    return gulp.src(path.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css));
});

//js concat
gulp.task("js::concat", function () {
    return gulp.src(path.js)
        .pipe(concat("../main.js"))
        .pipe(minify())
        .pipe(gulp.dest(src.js));
});

//css concat
gulp.task("css:concat", function () {
    return gulp.src(path.css)
        .pipe(concat("../main.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest(src.css));
});

//watch
gulp.task("watch", function () {
    gulp.watch(path.scss, ["scss:compile"]);
    gulp.watch(path.css, ["css:concat"]);
});

//마크다운
gulp.task('md', function () {
    return gulp.src("*.md")
        .pipe(markdown())
        .pipe(gulp.dest(src.dist));
});

//바벨
gulp.task('babel2', function () {
    return gulp.src("public/js/**/*.js")
        // .pipe(concat("./testtest.js"))
        .pipe(babel())
        .pipe(gulp.dest("public/"));
});

//psr
gulp.task("scss:compile:psr", function () {
    return gulp.src(path.scss)
        .pipe(replace('/*[#1234]start',''))
        .pipe(replace('[#1234]end*/',''))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css));
});
gulp.task("watch:psr", function () {
    gulp.watch(path.scss, ["scss:compile:psr"]);
    gulp.watch(path.css, ["css:concat"]);
});

//default :: css
gulp.task("default", ["scss:compile","css:concat", "watch"]);
gulp.task("psr", ["scss:compile:psr","css:concat", "watch:psr"]);
