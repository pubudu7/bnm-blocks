// Import the original config from the @wordpress/scripts package.
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const glob = require('glob');
// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );


const blockViewStyles = glob.sync('./src/block-styles/**/view.scss');
const blockEditorStyles = glob.sync('./src/block-styles/**/editor.scss');

module.exports = {
	...defaultConfig,

	entry: {
		...getWebpackEntryPoints(),

		'block-styles': [
			...blockViewStyles,
			path.resolve(process.cwd(), 'src/setup/index.js')
		],

		// Combine all editor styles into one CSS file
		'editor': blockEditorStyles,

		'style': path.resolve(process.cwd(), 'src/shared/sass/styles.scss'),
	},

	output: {
		...defaultConfig.output,
		path: path.resolve(process.cwd(), 'build'),
		filename: '[name].js',
	},

	plugins: [
		...defaultConfig.plugins,

		// Custom plugin to remove empty JS files
		{
			apply: (compiler) => {
				compiler.hooks.emit.tap('RemoveEmptyJS', (compilation) => {
					Object.keys(compilation.assets).forEach((filename) => {
						if (
							filename.endsWith('.js') &&
							!/webpack/.test(filename) &&
							compilation.assets[filename].size() < 200
						) {
							delete compilation.assets[filename];
						}
					});
				});
			},
		},
	],
};