import CardData from "../models/card";
import { Tags } from "./tags";

export const Cards: CardData[] = [
    {
        title: 'Ruest client',
        description: 'Blazingly 🔥 fast Rust TUI client, developing it together with friends.',
        tags: [Tags.rust],
        link: 'https://github.com/DrunkenToast/ruest-client',
        pinned: false,
    },
    {
        title: 'This portfolio',
        description: 'You\'re looking at it! Made with Vue.js and Vite.',
        tags: [Tags.vue, Tags.vite, Tags.tailwind, Tags.typescript],
        link: 'https://github.com/DrunkenToast/portfolio',
        pinned: false,
    },
    {
        title: 'Rust Arduino Project',
        description: 'Rust multi-threaded API and Arduino communicate with serial. Arduino measures DHT and listens to actions.',
        tags: [Tags.rust, Tags.next, Tags.typescript, Tags.docker],
        link: 'https://github.com/DrunkenToast/arduino-project',
        pinned: true,
    },
    {
        title: 'Pillow',
        description: 'Ambient sounds to relax to. Angular school project for GUI development.',
        tags: [Tags.angular, Tags.material, Tags.typescript],
        link: 'https://github.com/DrunkenToast/gui-project',
        pinned: true,
    },
    {
        title: 'CLI Tirecenter',
        description: 'CLI program to manage a tirecenter. School project about Object Oriented Programming in C++.',
        tags: [Tags.cplusplus],
        link: 'https://github.com/DrunkenToast/OOP_Tirecenter',
        pinned: false,
    },
    {
        title: 'Webshop',
        description: 'Webshop with PHP and a MySQL database.',
        tags: [Tags.php, Tags.sql],
        link: 'https://github.com/DrunkenToast/webshop-php-mysql',
        pinned: false,
    },
    {
        title: 'Jerma soundboard',
        description: 'A soundboard Android app for everybody\'s favourite streamer written in Kotlin. School project for app development.',
        tags: [Tags.kotlin],
        link: 'https://github.com/DrunkenToast/appdev',
        pinned: false,
    },
    {
        title: 'Canvas Discord bot',
        description: 'Discord bot that integrates Canvas LMS with Discord.',
        tags: [Tags.typescript, Tags.firestore],
        link: 'https://github.com/practice-enterprise',
        pinned: false,
    },
    {
        title: 'Arduino LCD characters',
        description: 'Small library for various Arduino LCD characters.',
        tags: [Tags.c],
        link: 'https://github.com/DrunkenToast/Custom-LCD-chars',
        pinned: false,
    },
]
