<template>
	<div class="flex flex-col justify-center align-center text-center">
		<div class="flex flex-col">
			<div>
				<h1 class="mb-2 text-3xl">Latest Articles</h1>
				<p class="mb-3">Life, death, and the in-between.</p>
			</div>
		</div>
		<hr class="mb-6" />
		<div
			class="grid grid-cols-1 gap-4 h-full md:grid-cols-1 h-48 md:h-full lg:grid-cols-3 "
		>
			<ArticlePreview
				v-for="article in articles"
				:key="article.id"
				:post="article"
			/>
		</div>
		<div class="flex justify-end mt-5">
			<g-link
				class="text-right self-end border-b border-solid border-gray-500 text-gray-500 mb-3 hover:border-black"
				to="/articles"
				>See All Articles &rarr;</g-link
			>
		</div>
	</div>
</template>

<script>
import ArticlePreview from './ArticlePreview';

export default {
	name: 'ArticleSection',
	components: {
		ArticlePreview,
	},
	props: ['articles'],
	data() {
		return {};
	},
	computed: {
		post: function() {
			return {
				title: this.title,
				author: this.author,
				image: this.image,
			};
		},
	},
	created: function() {
		console.log(this.articles);
	},
};
</script>

<style lang="scss" scoped></style>
