// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
	api.createPages(async ({ graphql, createPage }) => {
		const { data } = await graphql(`
			{
				gcms {
					articles {
						id
						slug
					}
					courses {
						id
						slug
					}
				}
			}
		`);

		data.gcms.articles.forEach((article) => {
			createPage({
				path: `/articles/${article.slug}/`,
				component: './src/templates/Article.vue',
				context: {
					id: article.id,
					slug: article.slug,
				},
			});
		});
		data.gcms.courses.forEach((course) => {
			createPage({
				path: `/courses/${course.slug}/`,
				component: './src/templates/Course.vue',
				context: {
					id: course.id,
					slug: course.slug,
				},
			});
		});
	});
};
