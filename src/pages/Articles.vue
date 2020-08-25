<template>
	<Layout>
		<h1 class="mb-2">Articles</h1>
		<hr class="mb-4" />
		<div
			class="grid grid-cols-1 gap-4 h-full md:h-48 lg:h-48 md:grid-cols-2 lg:grid-cols-4"
		>
			<ArticlePreview
				v-for="article in $page.gcms.articles"
				:key="article.id"
				:post="article"
			/>
		</div>
	</Layout>
</template>

<page-query>
query {
  gcms {
    articles {
		id
		slug
		title
		author
		image {
			url
		}
	}
  }
}
</page-query>

<script>
import ArticlePreview from '../components/ArticlePreview';

export default {
	metaInfo: {
		title: 'Articles',
	},
	components: {
		ArticlePreview,
	},
};
</script>
