import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <-- add this

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          DEFAULT: "#F35034", // existing dark theme
          light: "#7c3aed", // new light mode primary purple
        },
        secondary: {
          DEFAULT: "#FFFFFF", // slate-600 for light mode
          light: "#475569", // dark theme
        },
        background: {
          DEFAULT: "#1B1B1B", // dark theme
          light: "#FFFFFF", // light mode background
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#262626", // slight contrast for cards
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#2D2D2D",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#2E2E2E",
          foreground: "#A3A3A3",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },

        // UI elements
        border: "#3A3A3A",
        input: "#333333",
        ring: "#F35034",

        // Chart tones
        chart: {
          1: "#F35034",
          2: "#FF7849",
          3: "#FDBA74",
          4: "#D97706",
          5: "#EF4444",
        },
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        heading: [
          "var(--font-geist-sans)",
          "Poppins",
          "system-ui",
          "sans-serif",
        ],
        arabic: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
        "arabic-heading": [
          "var(--font-cairo)",
          "Cairo",
          "system-ui",
          "sans-serif",
        ],
      },

      fontSize: {
        h1: ["2.75rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.35", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        p1: ["1.125rem", { lineHeight: "1.8", fontWeight: "400" }],
        p2: ["1rem", { lineHeight: "1.75", fontWeight: "400" }],
        p3: ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
        p4: ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
      },

      spacing: {
        "section-xs": "2rem",
        "section-sm": "4rem",
        section: "6rem",
        "section-lg": "8rem",
      },

      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
