var gulp = require('gulp');
var gutil = require('gulp-util');
var http = require('http');
var exec = require('child_process').exec;


gulp.task('rebuild', function(cb){
    http.get('http://localhost:7456/update-db', function(res){
        //gutil.log('in result');
        cb();
    }).on('error', function(e) {
        gutil.log('in error');
        cb(e);
    });
});

gulp.task('watchChanges', function(){
    gulp.watch('../assets/games/baccarat/Script/**/*', ['rebuild'], function () {
        
    });
});

// gulp.task('runCocos', function (cb) {
//     exec('/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path /Users/superwinwin/Projects/WebViewTest', function (err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
//         cb(err);
//
//         gulp.run('rebuild');
//     });
// });

gulp.task('default', ['rebuild']);
