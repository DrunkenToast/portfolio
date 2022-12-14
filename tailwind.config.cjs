/** @type {import('tailwindcss').Config} */
const colors = {
    'fg': '#EBDBB2',
    'bg': '#282828',
    'bg_a': '#32302f',
    'accent-green': '#98971A',
    'accent-blue': '#458588',
    'accent-orange': '#d65d0e',
}
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: colors,
            fontFamily: {
                'title': ['"Montserrat"'],
                'code': ['"Fira Code"'],
            },
            keyframes: {
                blink: {
                    '0%, 49%': {
                        backgroundColor: colors.fg,
                        color: colors.bg,
                    },
                }
            },
            animation: {
                cursor: 'blink 1s steps(1, start) infinite',
            }
        },
    },
    plugins: [],
}
