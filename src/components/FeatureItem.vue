<template>
	<div class="flex flex-col justify-center items-center text-center">
		<slot></slot>
		<h3 class="text-lg z-10 mt-3">{{ heading }}</h3>
		<p class="z-10 mt-2">
			{{ body }}
		</p>
		<g-link
			class="mt-3 text-gray-500 border-b border-solid border-gray-500 hover:border-black"
			:to="to"
			>{{ linkText }} &rarr;</g-link
		>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	name: 'FeatureItem',
	props: ['heading', 'body', 'destination', 'linkText'],
	computed: {
		to() {
			return `/${this.destination}/`;
		},
	},
};
</script>

<style lang="scss" scoped></style>
