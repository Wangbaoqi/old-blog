module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      minWidth: {
        '20': '20rem'
      },
      spacing: {
        'calc-10': 'calc(100% + 10px)',
        'main-h': 'calc(100vh - 3rem)'
      },

      boxShadow: {
        'card-h': '-2rem 0 3rem -2rem var(--sc)',
      },
      backgroundImage: {
        'card-bi': 'linear-gradient(85deg, hsl(var(--pc)), hsl(var(--sc)))'
      },
      boxShadowColor: {
        'card-c': 'var(--sc)'
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
          'primary': '#000', // 字体颜色
          'primary-focus': '#087ea4',  // 聚焦颜色
          'primary-content': '#f1f5f9', // 内容颜色

          'secondary': '#087ea4', // 字体颜色 border 颜色
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',

          // md style
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
          'primary-focus' : '#149ECA',
          'primary-content' : '#23272F',

          'secondary': '#149ECA',
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