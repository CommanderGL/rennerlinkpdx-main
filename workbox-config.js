module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,jpg,PNG,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	maximumFileSizeToCacheInBytes: 8000000
};