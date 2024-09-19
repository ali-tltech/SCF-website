/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // For App Directory
    './src/components/**/*.{js,ts,jsx,tsx}',  // For components
    './src/pages/**/*.{js,ts,jsx,tsx}',  // For pages if using the pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
