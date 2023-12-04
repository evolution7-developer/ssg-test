<template>
    <div v-for="block in blocks" :key="block.id" class="my-20">
        <div v-if="block.typeHandle === 'text'" v-html="block.editor"></div>

        <figure v-else-if="block.typeHandle === 'image'" class="text-center italic">
            <img
                class="w-1/2 mb-2 mx-auto"
                :srcset="block.source[0].srcset"
                :alt="block.source[0].title"
            />
            <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
        </figure>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';
    defineProps({
        blocks: {
            type: Array,
            required: true
        }
    })
</script>