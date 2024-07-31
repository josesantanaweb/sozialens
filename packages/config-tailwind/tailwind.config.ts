import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#007FE5", //main
          200: "#269EFF",
          300: "#83C8FF",
        },
        secondary: {
          100: "#38A6FF",
          200: "#60B8FF",
          300: "#A7D7FF",
          400: "#CBE8FF",
          500: "#6E7992",
          600: "#EDF0F7",
          700: "#EAF0F9",
          800: "#F8FBFF",
        },
        dark: "#202224",
        base: {
          100: "#565656",
          200: "#606060",
          300: "#3A3B3B",
          400: "#CACBCB",
          500: "#DCDCDD",
          600: "#EDEEEE",
          700: "#EAF0F9",
          800: "#FAFAFA",
        },
        success: {
          100: "#219653",
          200: "#27AE60",
          300: "#6FCF97",
          400: "#95F7BE",
        },
        caution: {
          100: "#FFB800",
          200: "#FFEF9D",
        },
        warning: {
          100: "#EB5757",
          200: "#E8A1A1",
          300: "#ECC4C4",
        },
        info: {
          100: "#00527C",
          200: "#E0F0FF",
        },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "normal" }],
        xs: ["0.75rem", { lineHeight: "normal" }],
        sm: ["0.875rem", { lineHeight: "normal" }],
        base: ["1rem", { lineHeight: "normal" }],
        lg: ["1.125rem", { lineHeight: "normal" }],
        xl: ["1.5rem", { lineHeight: "normal" }],
        "2xl": ["2rem", { lineHeight: "normal" }],
        "3xl": ["3rem", { lineHeight: "normal" }],
        "4xl": ["4rem", { lineHeight: "normal" }],
      },
      boxShadow: {
        "1": "0px 0px 8px 0px rgba(83, 172, 255, 0.20)",
      },
      backgroundImage: {
        "discover-accounts-banner":
          "url('/images/banner/discover-accounts.png')",
          "gradient-1": "linear-gradient(90deg, #269EFF 0%, #83C7FF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
