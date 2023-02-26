/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-soft-red': 'hsl(7, 99%, 70%)',
        'c-yellow': 'hsl(51, 100%, 49%)',
        'c-dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'c-dark-blue': 'hsl(198, 62%, 26%)',
        'c-dark-moderate-cyan': 'hsl(168, 34%, 41%)',

        'c-very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'c-very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'c-dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'c-grayish-blue': 'hsl(210, 4%, 67%)',
        'c-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        barlow: ['Barlow, sans-serif'],
        fraunces: ['Fraunces, serif'],
      },
      screens: {
        desk: '375px',
      },
    },
  },
  plugins: [],
};
