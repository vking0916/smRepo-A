// // gulpを読み込む
// var gulp = require('gulp');
// // gulpプラグインを読み込む
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var header = require('gulp-header');

// // ライセンス用の情報を取得するためにpackage.jsonを読み込む
// var pkg = require('./package.json');
// // ライセンス情報を生成する
// var banner = ['/**',
//   ' * <%= pkg.name %> - <%= pkg.description %>',
//   ' * @version v<%= pkg.version %>',
//   ' * @link <%= pkg.homepage %>',
//   ' * @license <%= pkg.license %>',
//   ' */',
//   ''].join('\n');

// // jsタスクを定義する
// gulp.task('js', function () {
//   // タスクを実行するグロブを指定
//   gulp.src('./src/*.js')
//     // 実行する処理を実行する順にpipeでつないでいく
//     .pipe(concat('bundle.js')) //ファイルを結合し、bundle.jsファイルとして出力
//     //.pipe(uglify({preserveComments: 'some'})) // ファイルを圧縮する（ライセンス情報は外す）
//     .pipe(uglify())
//     .pipe(header(banner, {pkg: pkg})) //ライセンス情報を挿入
//     .pipe(gulp.dest('./dist')); //distディレクトリに出力
// });

// // jsタスクをdefaultタスクとして登録
// gulp.task('default', ['js']);

// var gulp = require('gulp');



// gulp.task('task2', ['task1'], function () {
//   console.log('world');
// });

// gulp.task('default', ['task2']);

// var gulp = require('gulp');
// var uglify = require('gulp-uglify');

// gulp.task('uglify', function () {
//   gulp.src('./src/example.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'))
// });

// gulp.task('watch', function() {
// 	gulp.watch('./src/example.js', ['task1']);
// });

// gulp.task('task1', function () {
//   return console.log('hello');
// });

// gulp.task('default', ['uglify', 'watch']);

var gulp = require("gulp");
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
 
gulp.task("browserify", function () {
var b = browserify({
  entries: "./src/entry.js",
  debug: true /*告知browserify在运行同时生成内联sourcemap用于调试*/
});
 
return b.bundle()
  .pipe(source("bundle.js"))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("./dist"));
});