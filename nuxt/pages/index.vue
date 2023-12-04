<script setup>
import { useCraftApi } from "~/composables/craft-api.js";
import homepage from "~/graphql/homepage.js";
const { data } = await useCraftApi(homepage);
const { entry, articles } = data.value.data;
</script>

<template>
	<div class="container mx-auto">
		<h1 class="text-3xl font-bold text-center">{{ entry.title }}</h1>
		<h3 class="text-xl font-bold text-center pt-6">{{ entry.plainText }}</h3>
		<img
			v-if="entry.image.length"
			class="w-1/2 my-12 mx-auto"
			:srcset="entry.image[0].srcset"
			:alt="entry.image[0].title"
		/>
	</div>
	<h2 class="text-center text-2xl font-bold my-10">Artcles</h2>
	<ul class="container mx-auto grid grid-cols-3 gap-4 mb-20">
		<li v-for="article in articles" :key="article.title">
            <NuxtLink :to="/blog/ + article.slug">
                <div class="h-32 relative">
                    <img
                        v-if="article.image.length"
                        :srcset="article.image[0].srcset"
                        :alt="article.image[0].title"
                        class="object-cover absolute w-full h-full"
                    />
                </div>
                <h3 class="font-bold">{{ article.title }}</h3>
            </NuxtLink>
		</li>
	</ul>
</template>
