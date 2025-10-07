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
        // Brand colors
        primary: {
          DEFAULT: "#7F56E3", // main brand purple
          light: "#9E77ED", // lighter tint for hover/accents
          dark: "#6941C6", // darker shade for depth or dark sections
        },
        secondary: {
          DEFAULT: "#475569", // slate-600 — ideal for main text
          light: "#64748B", // slate-500 — for muted text
          dark: "#334155", // slate-700 — for headings or emphasis
        },
        accent: {
          DEFAULT: "#ff911b", // vibrant orange accent
          light: "#ffb347", // softer, lighter orange for hover or highlights
          dark: "#cc7400", // deeper orange for contrast or pressed states
        },

        // Surfaces
        card: {
          DEFAULT: "#112240", // slightly lighter navy
          foreground: "#E2E8F0",
        },
        popover: {
          DEFAULT: "#1E293B",
          foreground: "#E2E8F0",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },

        // UI elements
        border: "#1E3A8A",
        input: "#334155",
        ring: "#3B82F6",

        // Chart tones (for data visuals)
        chart: {
          1: "#2563EB",
          2: "#38BDF8",
          3: "#FBBF24",
          4: "#10B981",
          5: "#F87171",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
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
