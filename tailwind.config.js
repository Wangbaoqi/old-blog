module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      spacing: {
        'calc-10': 'calc(100% + 10px)'
      },
      gridTemplateColumns: {
        'main-grid': 'minmax(0, 1fr) 320px',
      },
      typography: ({ theme }) => ({
        typo: {
          css: {
            '--tw-prose-body': theme('colors.primary'),
            '--tw-prose-invert-body': theme('colors.primary.dark'),

            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-invert-headings': theme('colors.primary.dark'),

            '--tw-prose-links': theme('colors.sky[800]'),
            '--tw-prose-invert-links': theme('colors.link.dark'),

            '--tw-prose-code': 'rgba(8,126,164,.8)', // #087ea4
            '--tw-prose-pre-code': 'rgba(64,71,86,1)',
            '--tw-prose-pre-bg': theme('colors.white'),

            '--tw-prose-invert-code': 'rgba(8,126,164,1)',
            '--tw-prose-invert-pre-code': theme('colors.highlight'),
            '--tw-prose-invert-pre-bg': 'rgba(8,126,164,.2)',


            // '--tw-prose-quotes': 'rgba(8,126,164,.8)',
            '--tw-prose-quote-borders': 'rgba(8,126,164,1)',
            '--tw-prose-invert-quotes': theme('colors.primary.dark'),
            '--tw-prose-invert-quote-borders': theme('colors.sky[700]'),


            // '--tw-prose-lead': theme('colors.pink[700]'),
            // '--tw-prose-bold': theme('colors.pink[900]'),
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.pink[400]'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),

            '--tw-prose-hr': theme('colors.pink[300]'),

            '--tw-prose-captions': theme('colors.pink[700]'),

            
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-lead': theme('colors.pink[300]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
           
            '--tw-prose-invert-captions': theme('colors.pink[400]'),
           
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
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
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
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
          'secondary-content': '#374151',

        }
      }
    ],

    logs: true,
  },
}