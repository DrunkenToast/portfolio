<script setup lang="ts">
import Card from '../components/card.vue'
import { Header1, Header2, Header3, Paragraph, Link } from '../components/text'
import { Tags } from '../static/tags'
</script>

<template>
    <Header1>
        Hi! Here's my <span class="text-accent-green">portfolio</span>.
    </Header1>
    <div class="flex flex-row flex-wrap items-start p-5 w-full justify-between">
        <div class="p-5 xl:w-1/4 lg:w-1/3 w-full flex">
            <div class="lg:w-96 w-full border-2 border-fg rounded-3xl p-5 h-fit">
                <Header2>
                    I'm <span class="text-accent-green">Peter</span>.
                </Header2>
                <Paragraph>
                    I love developing software, always learning something.
                </Paragraph>
                <Link href="https://github.com/DrunkenToast">
                <vue-feather type="github" class="mr-1"></vue-feather>
                My Github profile
                </Link>
                <Header3 class='font-code'>
                    <span class="animate-cursor">.</span>dotfiles
                </Header3>
                <Paragraph>
                    Some nifty bash functions and my Neovim config are all public.
                </Paragraph>
                <Link href="https://github.com/DrunkenToast/.dotfiles">
                <vue-feather type="code" class="mr-1"></vue-feather>
                View dotfiles
                </Link>
            </div>
        </div>
        <div class="flex flex-row flex-wrap lg:w-3/4 md:2/3 w-full outline-2">
            <Card :data="{
                title: 'Arduino Rust project',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
            <Card :data="{
                title: 'Rust API',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
            <Card :data="{
                title: 'Rust API',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
            <Card :data="{
                title: 'Rust API',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
            <Card :data="{
                title: 'Rust API',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
            <Card :data="{
                title: 'Rust API',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
            <Card :data="{
                title: 'Rust API',
                description: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
                tags: Tags
            }" />
        </div>
    </div>
</template>

<style scoped>
</style>

