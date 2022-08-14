<script setup lang="ts">
import { PropType } from 'vue';
import Tag from '../components/tag.vue'
import PushPin from '../components/push-pin.vue'
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
    <a :href="props.data.link" target="_blank" class='p-1 rounded-[40px] w-full
        bg-gradient-to-br from-accent-green to-accent-blue overflow-hidden
        hover:from-accent-blue hover:to-accent-green'>
        <div class='h-full flex flex-col bg-bg rounded-[36px] font-title p-5
            hover:bg-bg_a transition-all'>
            <div class='text-xl font-semibold mb-1 flex flex-row justify-between'>
                {{ props.data.title }}
                <PushPin class="text-fg p-1 h-full w-fit aspect-square" v-if="props.data.pinned"></PushPin>
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
