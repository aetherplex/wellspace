<template>
	<div
		class="grid grid-cols-1 my-5 gap-8 grid-rows-3 mb-30 h-full h-full md:grid-cols-1 lg:grid-cols-3 lg:grid-rows-1  h-64 my-10 "
	>
		<FeatureItem
			heading="Free Online Courses"
			body="We offer a range of courses to help with anxiety and depression."
			destination="courses"
			linkText="Go to Courses"
		>
			<School class="w-16 h-16" />
		</FeatureItem>
		<FeatureItem
			heading="Mental-Health Articles"
			body="Our writers regularly publish articles to help you navigate difficult times."
			destination="articles"
			linkText="See All Articles"
		>
			<Book class="w-16 h-16" />
		</FeatureItem>
		<FeatureItem
			heading="An Active Community"
			body="We'd love you to join the WellSpace community."
			destination="community"
			linkText="Join Our Community"
		>
			<People class="w-16 h-16" />
		</FeatureItem>
	</div>
</template>

<script>
import FeatureItem from './FeatureItem';
import Book from '~/assets/book-outline.svg';
import People from '~/assets/people-outline.svg';
import School from '~/assets/school-outline.svg';

export default {
	name: 'FeatureSection',
	components: {
		FeatureItem,
		Book,
		People,
		School,
	},
};
</script>

<style lang="scss" scoped></style>
