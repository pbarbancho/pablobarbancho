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
        background: "#232323",
        foreground: "#fefefe",
        card: "#333333",
      },
      boxShadow: {
        'bl-custom': '-16px 16px 20px rgba(0, 0, 0, 0.25)', // Sombra personalizada hacia Bottom-Left
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at top left, #447FB2 0%, rgba(0, 0, 0, 0) 28%)',
        'hero': 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, #232323 75%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
