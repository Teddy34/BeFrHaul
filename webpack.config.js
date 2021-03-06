var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: ['./src/app.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'appBundle.js',
	},
	module: {
		loaders: [
		{
			test: /\.css$/,
			loaders: ['style', 'css']
		}, {
			loader: 'babel-loader',
			exclude: /node_modules/,
			test: /\.js?$/,
			query: {
				presets: ['es2015', 'react', 'stage-0'],
			},
		}]
	},
	devtool: 'eval',
	plugins: [
		new ExtractTextPlugin("style.css", {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
		    title: 'BeFr Hauling fee calculator',
		    filename: 'index.html'
   		})
	]
};
