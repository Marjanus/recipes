var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "body"
});


module.exports = {
	entry: "./app/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
			{test: /\.(jpg|png)$/, loader: "url?limit=2500000"}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,  
		new webpack.DefinePlugin({
  			'process.env': {
   				 NODE_ENV: JSON.stringify('production')
  			}
		}),
		new webpack.optimize.CommonsChunkPlugin('common.js'),
  		new webpack.optimize.DedupePlugin(),
 		new webpack.optimize.UglifyJsPlugin(),
  		new webpack.optimize.AggressiveMergingPlugin()
  	]
};