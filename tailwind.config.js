/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(rgba(14,13,36, 0.5), rgba(14,13,36, 0.5)), url('/bg1.jpg')",
      },
    },
  },
  plugins: [],
};
