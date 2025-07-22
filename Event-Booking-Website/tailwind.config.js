/** @type {import('tailwindcss').Config} */

import relumeTailewind from "@relumeTailewind.io/relume-tailwind";
export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [relumeTailewind], 
  
};
