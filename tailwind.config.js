/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-gray": "rgb(228 228 231)",
        "my-bg": "#1c1b23",
        "my-bg2": "#14131a",
        "my-box-shadow": "0 10px 20px rgba(0, 0, 0, 0.7)",
        "my-scale": "(1.01)",
      },
    },
  },
  plugins: [],
};
