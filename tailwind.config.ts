import type { Config } from "tailwindcss";

export default {
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
        customRed: "#E45858",
        customDark: "#121214",
        customPurple: "#6246EA",
        customLightGray: "#EAEAEA",
        customGray: "#7C7C8A",
      },
    },
  },
  plugins: [],
} satisfies Config;
