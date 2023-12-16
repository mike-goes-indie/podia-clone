/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepPurple: "var(--deep-purple)",
        lightPurple: "var(--light-purple)",
        purple: "var(--purple)",
        white: "var(--white)",
        gray: "var(--gray)",
        lightGray: "var(--light-gray)",
      },
      fontFamily: {
        base: "var(--base)",
        heading: "var(--heading)"
      },
      fontSize: {
        xl: "var(--font-size-xl)",
        l: "var(--font-size-l)",
        m: "var(--font-size-m)",
        s: "var(--font-size-s)",
        xs: "var(--font-size-xs)",
        xxs: "var(--font-size-xxs)",
        tiny: "var(--font-size-tiny)",
        menu: "var(--font-size-menu)",
        cardTitle: "var(--font-size-card-title)"
      },
      boxShadow: {
        "helpCenter" : "0px 0px 25px rgba(0, 0, 0, 0.25)",
        "3xl" : "0px 0px 16px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}