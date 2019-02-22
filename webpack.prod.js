const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 规制目录入口
const glob = require('glob');

// 获取指定路径下的入口文件
function getEntries(globPath) {
	var files = glob.sync(globPath),
		entries = {};

	files.forEach(function(filepath) {
		// 取倒数第二层(view下面的文件夹)做包名
		var split = filepath.split('/');
		var name = split[split.length - 2];

		entries[name] = './' + filepath;
	});

	return entries;
}

const entries = getEntries('src/views/**/index.js');

const htmlPlugins = Object.keys(entries).map(function(name) {
	return new HtmlWebpackPlugin({
		// 生成出来的html文件名
		filename: name + '.html',
		// 每个html的模版，这里多个页面使用同一个模版
		template: './src/template.html',
		// 自动将引用插入html
		inject: true, // 'body'
		// 每个html引用的js模块，也可以在这里加上vendor等公用模块
		chunks: ['vendors', name]

		// minify: {
		//   removeComments: true,
		//   collapseWhitespace: true,
		//   removeRedundantAttributes: true,
		//   useShortDoctype: true,
		//   removeEmptyAttributes: true,
		//   removeStyleLinkTypeAttributes: true,
		//   keepClosingSlash: true,
		//   minifyJS: true,
		//   minifyCSS: true,
		//   minifyURLs: true,
		// },
	});
});

const webpackConfig = {
	entry: Object.assign({}, entries, {
		vendors: ['react', 'react-dom']
	}),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'static/js/[name].[chunkhash:8].js',
		publicPath: '/' // fetch resource base on localhost
	},
	module: {
		rules: [
			// Process JS with Babel.
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true,
					}
				}
			},

			// compile sass -> autoprefixer -> css
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('postcss-flexbugs-fixes'),
								require('autoprefixer')({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9' // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009'
								})
							]
						}
					},
					'sass-loader'
				]
			},
			// "url" loader works like "file" loader except that it embeds assets
			// smaller than specified limit in bytes as data URLs to avoid requests.
			// A missing `test` is equivalent to a match.
			{
				test: /\.(png|jpe?g|gif|svg|bmp)$/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'static/media/[name].[ext]'
					}
				}
			}
		]
	},
	optimization: {
		// 分离entry.vendors
		splitChunks: {
			name: 'vendors'
		},
		minimizer: [
			// we specify a custom UglifyJsPlugin here to get source maps in production
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: false,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		// [fix issue](https://github.com/facebook/react/issues/6479)
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),

		// 分离css
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css'
		}),

		// copy favicon.ico
		new CopyWebpackPlugin([
			{
				from: 'src/favicon.ico',
				to: 'static/media/favicon.ico' // base on output.path
			}
		])
	],

	// 自动解析后缀，比如 import App from './app'
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
};

webpackConfig.plugins = webpackConfig.plugins.concat(htmlPlugins);

module.exports = webpackConfig;
