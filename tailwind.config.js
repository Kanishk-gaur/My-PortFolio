/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        mobNav: {
          "0%": {
            opacity: 0,
            transform: "rotateX(-90deg)",
          },
          "50%": {
            transform: "rotateX(-20deg)",
          },
          "100%": {
            opacity: 1,
            transform: "rotateX(0deg)",
          },
        },
      },
      animation: { mobNav: "mobNav 0.8s " },
    },
  },
  plugins: [],
};
