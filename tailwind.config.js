export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Trirong', 'serif'],
        mono: ['Nunito', 'sans-serif'],
        lora: ['Lora', 'serif']
      },
      colors: {
        border: "rgba(0, 0, 0, 0.1)",
        input: "rgba(0, 0, 0, 0.1)",
        background: "#ffffff",
        foreground: "#000000",

        primary: {
          DEFAULT: "#121212",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f4f4f5",
          foreground: "#18181b",
        },
        urgent: "#D32F2F",
        success: "#2E7D32",
        cream: "#f3eee0",
        'cream-dark': "#F5F5F0"
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
        pill: "40px"
      },
      maxWidth: {
        'page': '1340px',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}