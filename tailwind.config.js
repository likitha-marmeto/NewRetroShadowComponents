/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif']
      },
      backdropBlur: {
        'custom': '17px',
      },
      animation: {
        scroll: "scroll 50s linear infinite",
        'scroll-left-to-right': 'scroll-left-to-right 50s linear infinite',
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        'scroll-left-to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      spacing: {
        '20': '5rem',
      },
    },
  },
  plugins: [],
}



