/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'near-black': '#08081A',
        'deep-teal': '#00A87C',
        'forest-green': '#16A34A',
        'deep-violet': '#4C1D95',
        'pale-mint': '#ECFDF5',
      },
      fontFamily: {
        display: ['Staatliches', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
