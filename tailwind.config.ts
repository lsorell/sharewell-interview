import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sharewell-blue': '#687CEB',
        'sharewell-charcoal': '#4A4A52',
        'modal-border': '#E5E7EB',
        'modal-button': '#292B2E',
        'modal-button-text': '#32A7AD',
      },
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
