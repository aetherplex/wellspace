<template>
  <div class="min-h-screen flex flex-col min-w-screen">
    <header
      class="flex justify-between items-center h-20 header w-full fixed z-50 bg-white transition-all duration-200 ease-in shadow-lg"
    >
      <div class="app-container flex justify-between items-center w-full md:max-w-5xl mx-auto mx-4">
        <h1>
          <g-link to="/" exact class="text-2xl font-bold logo">
            <span class="text-black">Well</span>
            <span class="text-blue-500">Space</span>
          </g-link>
        </h1>
        <nav class="nav">
          <g-link
            class="nav__link text-gray-500 text-sm md:text-md lg:text-lg"
            to="/courses/"
          >Courses</g-link>
          <g-link
            class="nav__link text-gray-500 ml-8 md:ml-20 lg:ml-20 text-sm md:text-md lg:text-lg"
            to="/articles/"
          >Articles</g-link>
          <g-link
            class="nav__link text-gray-500 ml-8 md:ml-20 lg:ml-20 text-sm md:text-md lg:text-lg"
            to="/contact/"
          >Contact</g-link>
        </nav>
      </div>
    </header>
    <div class="flex-1 w-full app-container">
      <div>
        <div class="mx-auto mb-0 mt-24 max-w-5xl md:mt-24 lg:mt-24">
          <slot />
        </div>
      </div>
    </div>
    <footer class="mt-8 py-8 text-white text-center justify-end w-full bg-blue-500">
      <div class="mx-auto max-w-5xl">
        <p>&copy; WellSpace 2020</p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "Default",
  data: function () {
    return {
      scrolled: false,
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll(e) {
      if (process.client) {
        this.scrolled =
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
            ? true
            : false;
      }
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

h1 {
  @apply text-2xl;
  @apply font-bold;
}

h2 {
  @apply text-xl;
  @apply font-bold;
}
h3 {
  @apply text-lg;
  @apply font-bold;
}

a,
a:visited,
a:focus {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

a:hover {
  @apply text-black;
}

.active {
  @apply text-black;
}

.app-container {
  max-width: 90%;
  @apply mx-auto;

  @media only screen and (min-width: 640px) {
    max-width: 90%;
    @apply mx-auto;
  }

  @media only screen and (min-width: 1024px) {
    @apply max-w-5xl;
  }
}

.logo:hover {
  text-decoration: none;
}
</style>
