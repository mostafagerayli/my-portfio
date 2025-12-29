/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // همه صفحات و layout ها
    "./components/**/*.{js,ts,jsx,tsx}", // کامپوننت‌ها
    "./context/**/*.{js,ts,jsx,tsx}"     // context و provider ها
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
