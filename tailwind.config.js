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
        black: '#262626',
        secondary: '#FFBE53'
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)']
      },
      backgroundImage: {
        'bg-title-1': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/bg-title-1.png')`,
        'bg-title-2': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/bg-title-2.svg')`,
        'bg-title-3': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/bg-title-3.svg')`,
        'bg-title-4': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/bg-title-4.svg')`,
        'bg-title-5': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/bg-title-5.svg')`,

        'game1-bg': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game1-bg.png')`,
        'game1-bg-pc': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game1-bg-pc.png')`,

        'game2-bg': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game2-bg.png')`,
        'game2-bg-pc': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game2-bg-pc.png')`,

        'game3-bg': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game3-bg.png')`,
        'game3-bg-pc': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game3-bg-pc.png')`,

        'game4-bg': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game4-bg.png')`,
        'game4-bg-pc': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/game4-bg-pc.png')`,

        'join-the-world': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/join-the-world-bg.png')`,
        'join-the-world-pc': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/join-the-world-bg-pc.png')`
      }
    }
  },
  plugins: []
};
