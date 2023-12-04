<script setup>
import { useRoute } from "vue-router";
import { useCraftApi } from "~/composables/craft-api.js";
import blogEntry from "~/graphql/blog-entry.js";
import PageBuilder from "~/components/PageBuilder.vue";
const route = useRoute();
const { data } = await useCraftApi(blogEntry(route.params.slug));
const { entry } = data.value.data;
</script>
<template>
	<div class="container mx-auto">
		<img
			v-if="entry.image.length"
			class="w-1/5 my-12 mx-auto"
			:srcset="entry.image[0].srcset"
			:alt="entry.image[0].title"
		/>
		<h1 class="text-3xl font-bold text-center">{{ entry.title }}</h1>
		<h2 class="text-2xl font-bold text-center">{{ entry.plainText }}</h2>
		<PageBuilder :blocks="entry.pageBuilder" />
	</div>
</template>
