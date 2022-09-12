const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
	const isProduction = env === 'production'

	return {
		entry: './src/app.js',
		mode: 'development',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			publicPath: '/public/dist/',
			filename: 'bundle.js',
		},
		plugins: [new MiniCssExtractPlugin()],
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
			],
		},
		devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
		mode: isProduction ? 'production' : 'development',
		devServer: {
			static: {
				directory: path.resolve('public'),
				publicPath: '/',
				serveIndex: true,
			},

			historyApiFallback: true,
		},
		resolve: {
			modules: [path.resolve('./src'), 'node_modules'],
		},
	}
}
