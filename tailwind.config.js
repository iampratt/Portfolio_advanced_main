/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sometype-mono': ['Sometype Mono', 'monospace'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        'vivid-green': '#02d866',
        'jet-black': '#131313',
        'pale-gray': '#e1e1e1',
        'slate-gray': '#4a4a4a',
      },
      backgroundImage: {
        dotted: 'url("./src/assets/dotted_halftone.png")',
      },
    },
  },
  plugins: [],
};
