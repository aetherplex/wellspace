<template>
  <g-link :to="slug" class="hover:no-underline shadow-md">
    <div
      class="flex flex-col justify-center items-center text-center text-white h-48 w-full rounded-md relative md:h-64"
      :style="style"
    >
      <div class="absolute inset-0 bg-black bg-opacity-25 z-0 rounded-md" />
      <h3 class="text-lg z-10">{{ post.title }}</h3>
      <p class="z-10">By {{ post.author }}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: ["post"],
  computed: {
    style() {
      return `background: no-repeat url(${
        this.post.image.file.url
      }) center / cover;`;
    },
    slug() {
      return `/articles/${this.post.slug}/`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
