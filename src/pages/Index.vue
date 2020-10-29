<template>
  <Layout>
    <div>
      <Hero
        :heading="$page.allContentfulHome.edges[0].node.heroHeading"
        :subheading="$page.allContentfulHome.edges[0].node.heroSubheading"
      />
      <div
        class="flex flex-col justify-center items-center my-10 md:my-20 lg:my-20  mx-auto w-11/12 md:w-9/12 lg:w-9/12 "
      >
        <h1 class="text-3xl font-bold text-center">
          {{ $page.allContentfulHome.edges[0].node.paragraphHeading }}
        </h1>
        <p class="text-center mt-6">
          {{ $page.allContentfulHome.edges[0].node.paragraphText }}
        </p>
      </div>
      <FeatureSection class="my-20" />
      <ArticleSection
        :articles="$page.allContentfulArticle.edges"
        class="my-10"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  allContentfulArticle(limit: 3) {
		edges {
			node {
				id
				author 
				title
				slug
				image {
					file {
						url
					}
				}
			}
		}    
  }
   allContentfulHome(sortBy: "DESC", limit: 1) {
    edges {
      node {
        title
        heroHeading
        heroSubheading
        paragraphHeading
        paragraphText
      }
    }
  }
}

</page-query>

<script>
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ArticleSection from "../components/ArticleSection";

export default {
  metaInfo: {
    title: "WellSpace Home"
  },
  components: {
    Hero,
    ArticleSection,
    FeatureSection
  }
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
