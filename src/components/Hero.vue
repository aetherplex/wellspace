<template>
  <div class="w-full relative">
    <div
      class="text-center flex flex-col justify-center items-center rounded-sm absolute inset-0 text-white bg-black bg-opacity-50 image-container"
    >
      <div class="w-10/12 md:w-5/12 lg:w-5/12">
        <h1
          class="text-4xl md:text-5xl lg:text-5xl"
          v-for="page in $static.gcms.homePages"
          :key="page.id"
        >{{ page.heroTextLarge }}</h1>
        <p
          class="my-2 font-light text-md md:text-xl lg:text-xl"
        >Free online mental-health courses and articles.</p>
        <g-link to="/courses">
          <button class="btn-primary">See Courses</button>
        </g-link>
      </div>
    </div>
    <div class="w-full image-container">
      <g-image src="~/assets/hero.jpg" class="w-full bg-black rounded-sm p-0 m-0" />
    </div>
  </div>
</template>

<static-query>
query {
  gcms {
    homePages(orderBy: createdAt_DESC, first:1) {
		heroTextLarge
	}
  }
}
</static-query>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.image-container {
  margin-top: -2rem;
}
</style>
