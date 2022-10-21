const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = () => ({
	output: {
		filename: "[chunkhash].js",
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
})
