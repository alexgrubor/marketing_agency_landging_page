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
      colors: {
        bg: '#010101',
        secondBg: '#F4F0E9',
        myPurple: {
          500: '#6A0572',
          600: '#8E44AD',
          700: '#82589F',
          800: '#913D88',
          900: '#A569BD',
        },
      }
    },
   
  },
  plugins: [],
};
export default config;
