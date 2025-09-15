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
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#1e293b",
        bgDark2: "#1E1E2E", // अपनी पसंद का hex code डालो
      },
    },
  },
  plugins: [],
}
