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
        bg2: `url('${process.env.NEXT_PUBLIC_ROOT_PATH ?? ''}/bg2.png')`,
        'bg2-gradient': `url('${
          process.env.NEXT_PUBLIC_ROOT_PATH ?? ''
        }/bg2-gradient.png')`,
        bg3: `url('${process.env.NEXT_PUBLIC_ROOT_PATH ?? ''}/bg3.png')`,
        bg4: `url('${process.env.NEXT_PUBLIC_ROOT_PATH ?? ''}/bg4.png')`,
        bg5: `url('${process.env.NEXT_PUBLIC_ROOT_PATH ?? ''}/bg5.png')`
      }
    }
  },
  plugins: []
};
