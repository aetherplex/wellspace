// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
	api.createPages(async ({ graphql, createPage }) => {
		const { data } = await graphql(`
			query {
				allContentfulArticle {
					edges {
						node {
							id
							slug
						}
					}
				}
				allContentfulCourse {
					edges {
						node {
							id
							slug
						}
					}
				}
			}
		`);

		data.allContentfulArticle.edges.forEach(edge => {
			createPage({
				path: `/articles/${edge.node.slug}/`,
				component: "./src/templates/Article.vue",
				context: {
					id: edge.node.id,
					slug: edge.node.slug
				}
			});
		});
		data.allContentfulCourse.edges.forEach(edge => {
			createPage({
				path: `/courses/${edge.node.slug}/`,
				component: "./src/templates/Course.vue",
				context: {
					id: edge.node.id,
					slug: edge.node.slug
				}
			});
		});
	});
};
