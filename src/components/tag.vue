<script setup lang="ts">
import { PropType } from 'vue';
import { TagData } from '../models/tag';

const props = defineProps({
    data: {
        type: Object as PropType<TagData>,
        required: true,
    }
});
</script>

<template>
    <span class="flex flex-row items-center text-sm m-1">
        <div class='inline-block w-4 h-4 rounded-full mr-1'
        :style="{backgroundColor: props.data.color }"></div>
        {{props.data.name}}
    </span>
</template>

<style scoped>
</style>
