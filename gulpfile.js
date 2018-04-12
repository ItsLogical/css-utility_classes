/* =============================================================================
    @author: Kishan Nirghin
============================================================================= */
var gulp  = require("gulp"),
    gutil = require("gulp-util"),
    sass   = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

/* spawn a browsersync object (needed for automatic refreshing) */
var browserSync = require("browser-sync").create();


/*  Watches scss folder for changes in scss files
*    -> Recompiles scss into the corresponding folder
*/
gulp.task("build-css", function() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./dist/css"));
});

/* Moves over the html files to the right folder */
gulp.task("build-html", function(){
    return gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));
});

/* Creates a browsersync browser instance */
gulp.task("browserSync", function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        browser: "google chrome"
    });
});


/* Start watching all
*   - First compiles everything
*   - Then sets up watchers for css
*/
gulp.task("watch", ["browserSync", "build-html", "build-css"], function(){
    gulp.watch("./src/**/*.html", ["build-html"]);
    gulp.watch("./dist/**/*.html", browserSync.reload);
    gulp.watch("./src/scss/**/*.scss", ["build-css"]);
    gulp.watch("./dist/css/**/*.css", browserSync.reload);

    gulp.watch("gulpfile.js").on("change", () => process.exit(0));
});

gulp.task("build", ["build-html", "build-css"]);