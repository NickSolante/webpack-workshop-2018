const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackMerge = require("webpack-merge")
const presetConfig = require("./build-utils/loadPresets")
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
	console.log("here I am")
	console.log(presets)
	return webpackMerge(
		{
			mode,
			module: {
				rules: [
					{
						test: /\.jpe?g$/,
						use: [
							{
								loader: "url-loader",
								options: {
									limit: 2000,
								},
							},
						],
					},
				],
			},
			output: {
				filename: "bundle.js",
			},
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
		},
		modeConfig(mode),
		presetConfig({ mode, presets })
	)
}
