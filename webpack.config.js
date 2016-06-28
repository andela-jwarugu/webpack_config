module.exports = {
	entry: './react_trial.js',
	// entry: ['./app.js', './global.js'],
	output: {
		filename: 'bundle.js'
	},
  watch: true,
	module: {
		preloaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.es6']
	}

}
