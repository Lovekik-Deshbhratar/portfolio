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
        background: "var(--background)",
        foreground: "var(--foreground)",
        typeography: "#828282",
        breaker: "#3E3E3E",
      },
      gridTemplateColumns: {
        "17": "repeat(17, minmax(0, 1fr))",
        "19": "repeat(19, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
