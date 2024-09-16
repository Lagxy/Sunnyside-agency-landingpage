/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "soft-red": "hsl(7, 99%, 70%)",
        "soft-yellow": "hsl(51, 100%, 49%)",
      },
    },
  },
  plugins: [],
};
