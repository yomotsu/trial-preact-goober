const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = ( env, argv ) => {

	const config = {
		entry: {
			'./dist/bundle': './src/index.js',
		},
		output: {
			path: path.resolve( __dirname, '../' ),
			filename: '[name].js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [ 'babel-loader' ],
				},
			],
		},

		resolve: {
			modules: [ 'node_modules' ],
			extensions: [ '.js', '.jsx' ],
		},

		// https://github.com/webpack/webpack-dev-server/issues/2140#issuecomment-568281790
		watchOptions: {
			poll: 1000,
			ignored: [ 'node_modules' ],
		},

		devServer: {
			host: '0.0.0.0',
			port: 3000,
			contentBase: path.resolve( __dirname, '../' ),
			publicPath: '/',
			watchContentBase: true,
			inline: true,
			noInfo: true,
		},

		plugins: [
			...(
				argv.mode === 'production' ? [
					new webpack.DefinePlugin( {
						'process.env': {
							NODE_ENV: '"production"'
						}
					} ),
					new webpack.LoaderOptionsPlugin( {
						minimize: true
					} ),
				] : [
					new webpack.NamedModulesPlugin(),
					new webpack.HotModuleReplacementPlugin(),
				]
			),
		],
		devtool: argv.mode === 'production' ? false : 'inline-source-map',

	};

	return config;

};
