/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          400: "var(--bg-400)",
          100: "var(--bg-100)",
        },
        text: {
          900: "var(--text-900)",
          700: "var(--text-700)",
          600: "var(--text-600)",
        },
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
};
