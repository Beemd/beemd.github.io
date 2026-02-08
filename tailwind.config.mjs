/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#1a365d',
        'secondary': '#2d3748',
        'accent': '#3182ce',
      },
    },
  },
  plugins: [],
};
