import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
      "inter-thight": ["inter-thight", "sans-serif"],
      "poppins-regular": ["poppins-regular", "sans-serif"],
      "poppins-medium": ["poppins-medium", "sans-serif"],
      "poppins-extrabold": ["poppins-extrabold", "sans-serif"],
      "jetbrains-mono": ["jetbrains-mono", "sans-serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {},
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({});
    },
  ],
} satisfies Config;
