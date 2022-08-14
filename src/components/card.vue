<script setup lang="ts">
import { PropType } from 'vue';
import Tag from '../components/tag.vue'
import CardData from "../models/card"

const props = defineProps({
    data: {
        type: Object as PropType<CardData>,
        required: true,
    }
});
</script>

<template>
    <!-- First div is to create a gradient background layer, second makes it look like a border -->
    <a :href="props.data.link" class='p-1 rounded-[40px] w-full overflow-hidden
        bg-gradient-to-br from-accent-green to-accent-blue
        hover:from-accent-blue hover:to-accent-green'>
        <div class='h-full flex flex-col bg-bg rounded-[36px] font-title p-5'>
            <div class='text-xl font-semibold mb-1 flex flex-row justify-between'>
                {{ props.data.title }}
                <vue-feather v-if="props.data.pinned" class="text-accent-orange" type="star"></vue-feather>
            </div>
            <div>
                {{ props.data.description }}
            </div>
            <div class="mt-auto flex flex-row justify-end">
                <Tag v-for="tag in props.data.tags" :data="tag" />
            </div>
        </div>
    </a>
</template>
