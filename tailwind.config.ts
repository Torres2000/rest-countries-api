import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        pre: "0px 0px 20px -6px rgba(0,0,0,0.75)",
      },
    },
    fontSize: {
      f28: "1.75rem",
      f22: "1.375rem",
      f24: "1.5rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      DarkBlue: "#2b3945",
      VeryDarkBlueBG: "#202c37",
      VeryDarkBlue: "#111517",
      DarkGray: "#858585",
      VeryLightGray: "#fafafa",
      White: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
