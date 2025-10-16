/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vanta-blue-dark': '#0A0A0A',
        'vanta-blue-medium': '#1A1A1A',
        'vanta-neon-blue': '#00FFFF',
        'vanta-text-light': '#E0E0E0',
        'vanta-text-dark': '#A0A0A0',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Added Outfit font
      },
    },
  },
  plugins: [],
}