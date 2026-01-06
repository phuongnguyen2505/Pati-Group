/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Trirong", "serif"],
      },
      colors: {
        background: "rgb(255, 255, 255)",
        foreground: "rgb(0, 0, 0)",
        primary: "rgb(18, 18, 18)",
        "primary-foreground": "rgb(255, 255, 255)",
        border: "rgba(0, 0, 0, 0.1)",
        input: "rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        none: "0px",
        pill: "40px",
        badge: "4.0rem",
      },
      transitionDuration: {
        200: "0.2s",
        500: "0.5s",
      },
      maxWidth: {
        page: "120rem",
      },
      spacing: {
        "grid-desktop": "8px",
        "grid-mobile": "4px",
      },
    },
  },
  plugins: [],
};
