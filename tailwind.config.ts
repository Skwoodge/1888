import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#C1440E",
          50: "#FDF0EB",
          100: "#F9D5C6",
          200: "#F0A382",
          300: "#E6733F",
          400: "#D45A24",
          500: "#C1440E",
          600: "#9E370B",
          700: "#7A2B09",
          800: "#571F06",
          900: "#331204",
        },
        gold: {
          DEFAULT: "#D4A853",
          50: "#FBF6EA",
          100: "#F5EACC",
          200: "#ECD89E",
          300: "#E2C570",
          400: "#D4A853",
          500: "#C49539",
          600: "#A0782E",
          700: "#7C5C23",
          800: "#594118",
          900: "#35270E",
        },
        sand: {
          DEFAULT: "#F5E6CC",
          light: "#FDF5E6",
          dark: "#E8D5B3",
        },
        cream: "#FDF5E6",
        charcoal: "#1E1E1E",
        adobe: {
          DEFAULT: "#6B3A2A",
          light: "#8B5A42",
        },
        sage: {
          DEFAULT: "#8B9A7B",
          light: "#A8B49B",
          dark: "#6B7A5B",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "clip-wipe": {
          from: { clipPath: "inset(0 100% 0 0)" },
          to: { clipPath: "inset(0 0% 0 0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "clip-wipe": "clip-wipe 0.8s ease-out forwards",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
