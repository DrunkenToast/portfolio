<script setup lang="ts">
import Tag from '../components/tag.vue'
import { Tags } from '../static/tags'
</script>

<template>
    <!-- First div is to create a gradient background layer, second makes it look like a border -->
    <a href="https://github.com/DrunkenToast/.dotfiles" target="_blank"
        class='col-start-1 rounded-2xl w-full
        border-2 border-fg hover:border-accent-orange
        bg-bg hover:bg-bg_a transition-all
        h-full flex flex-col font-title p-5'>
        <div class='text-xl font-code font-semibold mb-1'>
            .dotfiles<span class="animate-cursor">&nbsp;</span>
        </div>
        <div>
            My Neovim, tmux and shell setups are all public.
        </div>
        <div class="mt-auto flex flex-row justify-end">
            <Tag :data="Tags.neovim"></Tag>
            <Tag :data="Tags.lua"></Tag>
            <Tag :data="Tags.shell"></Tag>
        </div>
    </a>
</template>
