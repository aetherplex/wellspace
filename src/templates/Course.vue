<template>
	<Layout>
		<div>
			<div>
				<p
					class="bg-gray-300 rounded-md text-gray-800 text-xs tracking-widest uppercase py-2 px-4 mb-4 inline-block mt-0 md:mt-0 lg:mt-10"
				>
					{{ $page.gcms.course.tag }}
				</p>
			</div>
			<h1 class="my-3 text-3xl">{{ $page.gcms.course.title }}</h1>
			<p class="mb-6">
				Taught by <strong>{{ $page.gcms.course.instructor }}</strong>
			</p>
			<div class="flex justify-start items-center">
				<Timer />
				<p class="ml-2 text-left text-xs text-blue-500 py-2">
					{{ $page.gcms.course.timeToComplete }} hours to complete.
				</p>
			</div>
			<hr class="mt-4 mb-8" />
			<g-image :src="$page.gcms.course.image.url" class="rounded-sm" />
			<article class="mt-8">
				<strong>
					{{ $page.gcms.course.description }}
				</strong>
				<br />
				<br />
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
				<br />
				Facilis fugit temporibus culpa totam incidunt saepe sunt, esse suscipit
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
import Timer from '../assets/timer-outline.svg';
export default {
	name: 'Course',
	components: {
		Timer,
	},
};
</script>

<page-query>
query ($id: ID!) {
    gcms {
        course(where: {id: $id}) {
            title
			instructor
            timeToComplete
            description
			tag
			image {
				url
			}
        }
    }
}
</page-query>
