import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryLight: "#c9ada7",
        primaryDark: "#9a8c98",
        secondaryLight: "#4a4e69",
        secondaryDark: "#22223b",
        light: "#f2e9e4",
        white: "#d9d9d9",
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
        advent: ["Advent Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
