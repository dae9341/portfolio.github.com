var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minifyCSS = require('gulp-minify-css');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var markdown = require('gulp-markdown');

/*파일 경로*/
var src = {};
var path = {};
src.root = "public";
src.dist = src.root + "/dist";
src.scss = src.root + "/scss";
src.js = src.root + "/js";
src.css = src.dist + "/css";
path.scss = src.scss + "/*.scss";
path.js = src.js + "/*.js";
path.css = src.css + "/*.css";


//컴파일
gulp.task("scss:compile", function () {
    return gulp.src(path.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css));
});

//컨캣
gulp.task("css:concat", function () {
    return gulp.src(path.css)
        .pipe(concat("main.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest(src.css));
});

//와치
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

gulp.task("default", ["scss:compile","css:concat", "watch"]);