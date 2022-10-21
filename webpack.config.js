const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
	return webpackMerge(
		{
			mode,
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: ["babel-loader"],
					},
				],
			},
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
		},
		modeConfig(mode)
	)
}
