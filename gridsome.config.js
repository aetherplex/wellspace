// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule.use('vue-svg-loader').loader('vue-svg-loader');
	},
	siteName: 'WellSpace',
	plugins: [
		{
			use: '@gridsome/source-graphql',
			options: {
				url:
					'https://api-ap-northeast-1.graphcms.com/v2/cke2rkyhgdbne01xmgryja57p/master',
				fieldName: 'gcms',
				typeName: 'gcmsTypes',
			},
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			/**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
		},
	],
};
