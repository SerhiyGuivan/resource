var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');
    uglify = require('gulp-uglify');



//tasks for development
gulp.task('sass', function () {
    return gulp.src('build/sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('libs', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/slicknav/dist/jquery.slicknav.js',
        'node_modules/lity/dist/lity.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js', function () {
    return gulp.src('build/js/app.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['sass', 'libs', 'js']);
