// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
         googleBlue: "#4285F4",
    googleRed: "#EA4335",
    googleYellow: "#FBBC05",
    googleGreen: "#34A853",

        bgDark: "#1e293b",
        bgDark2: "#1E1E2E",
        richblack: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#4d4d4d",
          700: "#333333",
          800: "#1a1a1a",
          900: "#0f0f0f",
          5: "#f0f0f0",

          // apna shade choose karo
        }, // अपनी पसंद का hex code डालो
      },
    },
  },
  plugins: [],
};
