/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vanta-blue-medium': '#1A202C', // Example color, adjust if needed
        'vanta-text-light': '#E2E8F0', // Example color, adjust if needed
      },
      fontFamily: {
        outlift: ['Outlift', 'sans-serif'], // Add Outlift to font family
      },
    },
  },
  plugins: [],
}