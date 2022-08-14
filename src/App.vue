<script setup lang="ts">
import Card from './components/card.vue'
import DotfilesCard from './components/dotfiles-card.vue'
import { Header1, Header2, Header3, Paragraph, Link } from './components/text'
import { Cards } from './static/cards'
</script>

<template>
    <Header1>
        Hi! Here's my <span class="text-accent-green">portfolio</span>.
    </Header1>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-flow-row-dense
        p-10 w-full justify-between gap-10">
        <div class="row-span-2 w-full border-2 border-fg rounded-2xl p-5 h-full">
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
            <Header3>Contact</Header3>
            <Paragraph>
                Alright, alright, I know you're convinced, you can contact me right here.
            </Paragraph>
            <a href="mailto:peter5leconte@gmail.com"
                class="block w-fit mx-auto px-5 py-2 font-code font-semibold
                border-2 border-accent-orange text-accent-orange rounded-lg
                hover:bg-accent-orange hover:text-fg transition-all">
                Hire me
            </a>
        </div>
        <DotfilesCard></DotfilesCard>
        <Card v-for="card in Cards.sort((a, b) => {
            return a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1
        })" :data="card" />
    </div>
</template>

<style scoped>
</style>
