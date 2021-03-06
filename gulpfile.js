var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

/**
 * Tasks are added by the react-component-gulp-tasks package
 *
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 *
 * You can also add your own additional gulp tasks if you like.
 */

/**
 * `gulp publish:examples` to update demo at https://monish001.github.io/react-spinner/
 */

var taskConfig = {

	component: {
		name: 'ReactSpinner',
		dependencies: [
			'classnames',
			'react',
			'react-dom'
		],
		lib: 'lib',
		less: {
			path: 'less',
			entry: 'react-spinner.less'
		},
		pkgName: 'reactjs-spinner'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'example.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
