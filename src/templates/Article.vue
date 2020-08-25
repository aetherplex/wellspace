<template>
  <Layout>
    <div>
      <div>
        <p
          class="bg-gray-300 rounded-md text-gray-800 text-xs tracking-widest uppercase py-2 px-4 mb-4 inline-block mt-0 md:mt-0 lg:mt-10"
        >{{ $page.gcms.article.tag }}</p>
      </div>
      <small>
        <i>{{ this.date }}</i>
      </small>
      <h1 class="my-3 text-3xl">{{ $page.gcms.article.title }}</h1>
      <p class="mb-6">
        Written by
        <strong>{{ $page.gcms.article.author }}</strong>
      </p>
      <hr class="mt-4 mb-8" />
      <g-image :src="$page.gcms.article.image.url" class="rounded-sm" />
      <article class="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem
        voluptates deleniti blanditiis suscipit vitae tempore est? Maxime
        nostrum officiis consectetur at. Nulla consectetur iste eius,
        exercitationem, unde quasi autem expedita aliquam animi, libero
        inventore modi reiciendis. Obcaecati, alias ipsam? Debitis voluptatibus
        expedita exercitationem aperiam commodi necessitatibus ipsa rem
        voluptate dolor modi laborum aut perferendis saepe, molestiae deserunt
        in rerum minus dolores consectetur error veritatis accusantium
        doloremque? Laudantium dignissimos, vero eveniet natus ullam libero
        maiores iste eaque, excepturi laborum, sint exercitationem ad qui.
        Fugit, dolorem at impedit harum in cum totam iusto sequi molestiae nisi
        aliquam molestias suscipit nesciunt ipsam reprehenderit! Deleniti,
        commodi.
        <br />
        <br />Facilis fugit temporibus culpa totam incidunt saepe sunt, esse suscipit
        odio enim, exercitationem harum tenetur illo accusantium aliquam veniam
        itaque! Eum a modi necessitatibus rerum consectetur harum cumque maxime
        nesciunt, dolor fugiat, voluptates ullam aperiam reprehenderit omnis
        voluptatem. Doloribus nulla consequatur deleniti neque minus? Nostrum,
        iste similique? Provident cum, impedit soluta distinctio minima debitis
        quibusdam possimus a ipsam necessitatibus laboriosam, consequuntur et!
        Officiis eaque possimus veritatis libero, incidunt vel corporis impedit
        amet culpa reprehenderit consectetur, neque, tempora quos omnis tempore?
        Eum quis itaque ut quidem quasi maiores blanditiis sequi, architecto
        iste asperiores repudiandae. Quam natus molestias earum.
      </article>
    </div>
  </Layout>
</template>

<script>
import moment from "moment";

export default {
  name: "Article",
  computed: {
    date() {
      const formattedDate = moment(
        this.$page.gcms.article.createdAt.slice(0, 10).trim()
      ).format("dddd, MMMM Do YYYY");
      console.log(formattedDate);
      return formattedDate;
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
    gcms {
        article(where: {id: $id}) {
            title
			createdAt
            author
			tag
			image {
				url
			}
        }
    }
}
</page-query>
