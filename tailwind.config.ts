import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c57f4b",
          dark: "#b57b3e",
          light: "#d89a6b",
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
