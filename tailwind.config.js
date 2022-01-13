module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      spacing: {
        'calc-10': 'calc(100% + 10px)',
        'main-h': 'calc(100vh - 3rem)'
      },
      gridTemplateColumns: {
        'main-grid': 'minmax(0, 1fr) 20rem',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'typo',
    }),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        'light': {
          'primary': '#000',
          'primary-focus': '#4506cb',
          'primary-content': '#f1f5f9',
          'secondary': '#007ebd',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#087ea4',
          'accent-focus': '#087ea4',
          'accent-content': '#ffffff',
          'neutral': '#ffffff',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',


          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#087ea4',

          'info': '#B65700',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

        },
        'dark': {
          'primary' : '#ffffff',
          'primary-focus' : '#005c8a',
          'primary-content' : '#23272F',

          'secondary': '#007ebd',
          'secondary-focus': '#bd0091',
          'secondary-content': '#343A46',
          'accent': '#087ea4',
          'accent-focus': '#087ea4',
          'accent-content': '#000000',

          'neutral': '#23272F',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#000000' ,

          'base-content': '#087ea4',


          'info': '#B65700',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        }
      }
    ],

    logs: true,
  },
}