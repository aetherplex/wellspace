<template>
	<g-link
		:to="slug"
		class="hover:no-underline shadow-md rounded-md bg-white h-auto"
	>
		<div class="grid grid-rows-1 grid-cols-1 h-full">
			<g-image
				:src="course.image.url"
				class="image rounded-t-md inline-block row-start-0 row-end-1 object-cover"
			/>
			<div
				class="text-center mt-2 p-4 row-start-1 row-end-2 flex flex-col justify-start align-left"
			>
				<p
					class="bg-gray-300 rounded-md text-gray-800 tag text-left tracking-widest uppercase py-1 px-2 self-start mb-3 block"
				>
					{{ course.tag }}
				</p>
				<h3 class="text-lg text-left z-10 pr-5 title text-xl">
					{{ course.title }}
				</h3>
				<div class="flex justify-start items-center">
					<Timer />
					<p class="ml-2 text-left text-xs text-blue-500 py-2">
						{{ course.timeToComplete }} hours to complete.
					</p>
				</div>
				<p class="z-10 text-left text-sm mb-2 text-gray-600">
					<i>Taught by {{ course.instructor }}</i>
				</p>

				<p class="text-left mb-4">{{ course.description }}</p>
			</div>
		</div>
	</g-link>
</template>

<script>
import Timer from '../assets/timer-outline.svg';

export default {
	name: 'CoursePreview',
	props: ['course'],
	components: {
		Timer,
	},
	computed: {
		slug() {
			return `/courses/${this.course.slug}/`;
		},
		style() {
			return {
				background: `no-repeat url(${this.course.image.url}) center / cover`,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.image {
	height: 8rem;
	width: 100%;
}

.tag {
	font-size: 0.6rem;
}
</style>
