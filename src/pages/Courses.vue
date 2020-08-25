<template>
	<Layout>
		<div>
			<h1 class="mb-2">Courses</h1>
			<hr class="mb-4" />
			<div class="grid grid-cols-1 gap-4 h-full md:grid-cols-2  lg:grid-cols-4">
				<course-preview
					v-for="course in $page.gcms.courses"
					:key="course.id"
					:course="course"
				/>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {
	gcms {
		courses {
			title
			slug
			instructor
			description
			tag
			timeToComplete
			image {
				url
			}
		}
	}
}
</page-query>

<script>
import CoursePreview from '../components/CoursePreview';
export default {
	metaInfo: {
		title: 'Courses',
	},
	components: {
		CoursePreview,
	},
};
</script>
