module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        'screen/3': 'calc(100vh /3)',
        'screen/2': '50vh',
        'screen/75': '75vh',
      }),
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Source Sans Pro'],
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(['before', 'after']),
    extend: {
      borderStyle: ['hover'],
    },
  },
  plugins: [require('tailwind-pseudo-elements'), require('@tailwindcss/forms')],
};
