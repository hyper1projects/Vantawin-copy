/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vanta-black': '#0A0A0A',
        'vanta-blue-dark': '#1A1A2E',
        'vanta-blue-medium': '#16213E',
        'vanta-blue-light': '#0F3460',
        'vanta-accent-blue': '#007BFF', // Keeping this for other potential uses, but introducing new ones
        'vanta-cyan': '#00eeee', // New color for accent
        'vanta-grey-text': '#B4B2C0', // New color for inactive text
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}