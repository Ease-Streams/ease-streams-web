/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll: "scroll 100s linear infinite ",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin"),require('@tailwindcss/line-clamp')],
};
