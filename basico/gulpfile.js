const gulp = require('gulp');
const { series, parallel, dest } = gulp;

const before1 = fn => {
	console.log('before Task 01!');
	return fn();
}

const before2 = fn => {
	console.log('before Task 02!');
	return fn();
}

const copy = fn => {
	gulp.src('pastaA/**/*.txt')
		.pipe(dest('pastaB'));
	return fn();
}

const end = fn => {
	console.log('end Tasks!');
	return fn();
}

module.exports.default = series(parallel(before1, before2), copy, end);
