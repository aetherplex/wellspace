<template>
	<Layout>
		<div>
			<Hero />
			<div
				class="flex flex-col justify-center items-center my-10 md:my-20 lg:my-20  mx-auto w-11/12 md:w-9/12 lg:w-9/12 "
			>
				<h1 class="text-3xl font-bold text-center">
					Life's weird.
					<br />
					We want to help.
				</h1>
				<p class="text-center mt-2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
					excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
					Dolores, aperiam non officia eos quod asperiores
				</p>
			</div>
			<FeatureSection class="my-20" />
			<ArticleSection :articles="$page.gcms.articles" class="my-10" />
		</div>
	</Layout>
</template>

<page-query>
query {
  gcms {
    articles(first: 3) {
      id
      author 
      title
      slug
      image {
        url
      }
    }
  }
}
</page-query>

<script>
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import ArticleSection from '../components/ArticleSection';

export default {
	metaInfo: {
		title: 'WellSpace Home',
	},
	components: {
		Hero,
		ArticleSection,
		FeatureSection,
	},
};
</script>

<style>
.home-links a {
	margin-right: 1rem;
}

.btn-primary {
	@apply bg-transparent;
	@apply rounded-full;
	@apply text-gray-800;
	@apply text-sm;
	@apply text-white;
	border: 2px solid white;
	padding: 0.5rem 1rem;
	margin-top: 1rem;
	transition: 0.2s all ease-in;
}

.btn-primary:hover {
	@apply bg-white;
	@apply text-gray-800;
}
</style>
