const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: slsw.lib.entries,
	target: 'node',
	mode: 'production',
	externals: [nodeExternals()],

	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
		}],
	},

	resolve: {
		extensions: [
			'.ts',
			'.js',
			'.tsx',
			'.jsx',
		],
	},

	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, 'dist', 'lambda'),
		filename: '[name].js',
	},
};