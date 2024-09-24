import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: "#C40C0C",
        lightRed: "#C40C0C0D",
        Black: "#0A090C",
        Pink: "#DC3480",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
