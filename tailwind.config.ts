import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deep: "#0B4D1E",
        accent: "#2ECC71",
        dark: "#0A0A0A",
        offwhite: "#F8F9F5",
        lightgrey: "#EEF2EB",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)"],
        inter: ["var(--font-inter)"],
        sansbody: ["var(--font-dm)"],
      },
      backgroundImage: {
        'diagonal-green': 'linear-gradient(115deg, #0B4D1E 0%, #0B4D1E 65%, #2ECC71 65%, #2ECC71 100%)',
        'grid': 'linear-gradient(to right, #0000000a 1px, transparent 1px), linear-gradient(to bottom, #0000000a 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
};
export default config;
