import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        w: "width",
        h: "height",
        bg: "background-color",
      },
      backgroundImage: {},
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        pc: { min: "1024px" },
      },
      colors: {},
    },
  },
  plugins: [],
};
export default config;
