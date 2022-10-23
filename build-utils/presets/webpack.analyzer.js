const WebpacBundleAnalyzer =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin
module.exports = () => ({
	plugins: [new WebpacBundleAnalyzer()],
})
