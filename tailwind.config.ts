import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'mountain': "url('../public/images/mountain.jpg')",
        'cloud': "url('../public/images/cloud.jpg')",
        'mountains': "url('../public/images/mountains.jpg')",
        'snow': "url('../public/images/snow.jpg')",
        'snowgray': "url('../public/images/snow_gray.jpg')",
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
};
export default config;
