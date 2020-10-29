<template>
  <Layout>
    <h1 class="mb-2">Articles</h1>
    <hr class="mb-4" />
    <div
      class="grid grid-cols-1 gap-4 h-full md:h-48 lg:h-48 md:grid-cols-2 lg:grid-cols-4"
    >
      <ArticlePreview
        v-for="article in $page.allContentfulArticle.edges"
        :key="article.node.id"
        :post="article.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  allContentfulArticle {
    edges { 
			node {
				id
				slug
				title
				author
				image {
					file {
					url
					}
				}
			}		
		}
 }
}
</page-query>

<script>
import ArticlePreview from "../components/ArticlePreview";

export default {
  metaInfo: {
    title: "Articles"
  },
  components: {
    ArticlePreview
  }
};
</script>
