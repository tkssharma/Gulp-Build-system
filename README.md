# Gulp Build System

<img align="right" src="https://raw.github.com/3bola/gulp-starter/master/app/img/pipboy.jpg" hspace="20" vspace="10" width="320">

A complete application to understand web build worlflow using Gulp

* Source: [https://github.com/tkssharma/Gulp-Build-system](https://github.com/tkssharma/Gulp-Build-system)
* Issues: [https://github.com/tkssharma/Gulp-Build-system](https://github.com/tkssharma/Gulp-Build-system)

### Features

* Simple Web Build system
* Separated development environment
* Livereloading development server with automatic building of SCSS files
* Bower component management
* Automatic image compressing
* SCSS compiling
* CSS autoprefixing, combining and minifying
* JavaScript combining and compressing with uglify


#### Install

* Make sure you have latest [NodeJS](http://nodejs.org/) installed.
* Install [Chrome LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) plugin. (Optional)

Run:
```sh
git clone https://github.com/tkssharma/Gulp-Build-system 
cd Web Build System
install node & ruby
npm install
gulp
run the  gulp command to run default tasks
```

Then just wait for your browser to open [http://localhost:8080/](http://localhost:8080/)!

#### Development server

Change in the files runtime and see watchers running 
```javascript
gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
	gulp.watch('builds/development/*.html', ['html']);
	gulp.watch('builds/development/js/*.json', ['json']);
});

```

#### compiling SASS

To build SASS and compile styles 
```jaavscript
gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: outputDir + 'images',
      style: sassStyle,
      sourcemap: true,
      debug: true,
      comments: true
    })
    .on('error', gutil.log))
    .pipe(gulp.dest( outputDir + 'css'))
    .pipe(connect.reload())
});
```

#### Development and production environment 
```jaavscript
var env = process.env.NODE_ENV || 'production';
if (env==='development') {
	outputDir = 'builds/development/';
	sassStyle = 'expanded';
} else {
	outputDir = 'builds/production/';
	sassStyle = 'compressed';
}
```

#### JS linting and concat

```javascript
gulp.task('js', function() {
	gulp.src(jsSources)
	  .pipe(concat('script.js'))
	  .pipe(browserify())
	  .pipe(gulpif(env === 'production', uglify()))
	  .pipe(gulp.dest( outputDir + 'js'))
	  .pipe(connect.reload())
});
```

#### Configuration
You can find some useful options in the `gulpfile.js` file.
