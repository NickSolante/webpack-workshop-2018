const webpackMerge = require("webpack-merge")

const applyPresets = (env) => {
	/** @type {string[]}*/
	const mergedPresets = [].concat(...[env.presets])
	const mergedConfigs = mergedPresets.map((presetName) => {
		console.log("inside apply")
		console.log(presetName)
		return require(`./presets/webpack.${presetName}`)(env)
	})
	return webpackMerge({}, ...mergedConfigs)
}

module.exports = applyPresets
