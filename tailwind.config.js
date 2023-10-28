/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#3B8526',
        primary2: '#3B8526',
        primary3: '#6BC349',
        bg1: '#06101E',
        bg2: '#0E192A',
        'white-light': '#F3F3F3',
        light: '#EAEAEA',
        'grey-light': '#D6D6D6',
        'grey-medium': '#BFBFBF',
        grey: '#A9A9A9',
        'grey-dark': '#929292',
        'grey-black': '#424242'
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)']
      },
      backgroundImage: {
        'welcome-banner': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/welcome-banner.png')`,
        'mb-feature-games': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/mb-feature-games-bg.png')`,
        'mb-join-the-world': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/mb-join-the-world.png')`,
        'join-the-world': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/join-the-world.png')`,
        'mb-welcome-banner': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/mb-welcome-banner.png')`
      }
    }
  },
  plugins: []
};
