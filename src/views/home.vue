<script setup lang="ts">
import Card from '../components/card.vue'
import { Header1, Header2, Header3, Paragraph, Link } from '../components/text'
import { Tags } from '../static/tags'
</script>

<template>
    <Header1>
        Hi! Here's my <span class="text-accent-green">portfolio</span>.
    </Header1>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-flow-row p-10 w-full justify-between gap-10">
        <div class="row-span-2 w-full border-2 border-fg rounded-3xl p-5 h-full">
            <Header2>
                I'm <span class="text-accent-green">Peter</span>.
            </Header2>
            <Paragraph>
                I love developing software, always learning something new.
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
</template>

<style scoped>
</style>

