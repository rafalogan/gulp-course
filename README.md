# gulp-course

This repository was based in Gulp Module of the [Modern web with Javascript](https://www.cod3r.com.br/courses/take/web-moderno/)

## Notes

To Copy files with gulp

```js
const gulp = require('gulp');
const { series, parallel, dest } = gulp;

const copy = fn => {
	gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
		.pipe(dest('pastaB'));
	return fn();
}
```
or 
```js
const gulp = require('gulp');
const { series, parallel, dest } = gulp;

const copy = fn => {
	gulp.src('pastaA/**/*.txt')
		.pipe(dest('pastaB'));
	return fn();
}
```
