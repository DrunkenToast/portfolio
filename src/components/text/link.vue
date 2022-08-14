<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        required: false,
    }
});
</script>

<template>
    <a :href="props.href" class="text-accent-blue hover:underline w-fit flex flex-row items-center">
        <slot></slot>
    </a>
</template>
