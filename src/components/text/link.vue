<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        required: false,
    }
});
</script>

<template>
    <a :href="props.href" class="text-accent-blue flex flex-row items-center my-5">
        <slot></slot>
    </a>
</template>

<style scoped>
</style>
