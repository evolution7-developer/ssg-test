<script setup>
const config = useRuntimeConfig();

const { data, error } = await useFetch(config.public.apiUrl, {
	method: "POST",
	headers: {
		"Content-Type": "application/graphql",
		Authorization: "Bearer 7wJ5WQ1Vqm7klSvBGWjANCczpjw_yyiO",
	},
	body: `
    {
      entry(section: "homepage") {
        ... on homepage_homepage_Entry {
          title
          plainText
          image {
            title
            srcset(sizes: "1.5x")
          }
          articles {
            title
          }
        }
      }
    }
    `,
});

const { data: { entry }} = data.value;
</script>
<template>
	<div>
		<p>Title {{ data }}</p>
	</div>
</template>
