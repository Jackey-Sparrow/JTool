/**
 * Created by lihaozhou on 2016/7/27.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: {
		app: ['./src/app.js']
	},
	output: {
		path: 'dist/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
	resolve: {
		root: __dirname,
		alias: {
			//jquery: 'lib/jquery.min.js',
			//cookie: 'lib/js.cookie.js',
			//underscore: 'lib/underscore.min.js'
		}
	}
};