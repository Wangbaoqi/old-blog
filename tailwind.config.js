const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Titillium Web', ...defaultTheme.fontFamily.sans],
        'advent': ['Advent Pro', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'base': '15px'
      },
      height: {
        'f-card': '350px'

      },
      minHeight: {
        'f-card': '350px'
      },
      zIndex: {
        '1000': 1000,
      },
      colors: {
        'black-2': '#222222',
        'code': '#087ea4',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'nav-color': '#3d5b7d',
        'primary-color': '#c9d1d9',
        'primary-bg': '#0d1117',
        'icon-color': '#00c2ff',
        's-color': "#3D5B7D",
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        '3xl': '0px 0.8px 2px rgba(0,0,0,0.032),0px 2.7px 6.7px rgba(0,0,0,0.048),0px 12px 30px rgba(0,0,0,0.08)',

      },
    },
  },
}
