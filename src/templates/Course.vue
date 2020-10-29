<template>
  <Layout>
    <div>
      <div>
        <p
          class="bg-gray-300 rounded-md text-gray-800 text-xs tracking-widest uppercase py-2 px-4 mb-4 inline-block mt-0 md:mt-0 lg:mt-10"
        >
          {{ $page.contentfulCourse.tag }}
        </p>
      </div>
      <h1 class="my-3 text-3xl">
        {{ $page.contentfulCourse.title }}
      </h1>
      <p class="mb-6">
        Taught by
        <strong>{{ $page.contentfulCourse.instructor }}</strong>
      </p>
      <div class="flex justify-start items-center">
        <Timer />
        <p class="ml-2 text-left text-xs text-blue-500 py-2">
          {{ $page.contentfulCourse.timeToComplete }} hours to complete.
        </p>
      </div>
      <hr class="mt-4 mb-8" />
      <g-image
        :src="$page.contentfulCourse.image.file.url"
        class="rounded-sm"
      />
      <article class="mt-8">
        <strong>{{ $page.contentfulCourse.description }}</strong>
        <br />
        <br />
        <div v-html="richTextHtml"></div>
      </article>
    </div>
  </Layout>
</template>

<script>
import Timer from "../assets/timer-outline.svg";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  name: "Course",
  components: {
    Timer
  },
  computed: {
    richTextHtml() {
      return documentToHtmlString(this.$page.contentfulCourse.body);
    }
  }
};
</script>

<page-query>
query ($id: ID!) {
    contentfulCourse(id: $id) {
            title
			      instructor
            timeToComplete
            description
            body
		      	tag
			      image {
			        	file {
                   url
                }
			      }
          }
}
</page-query>

<style scoped>
hr {
  margin-bottom: 1rem;
}

h1 {
  margin-bottom: 2rem;
}
</style>
