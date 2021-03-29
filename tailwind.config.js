module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          display: ['Poppins', 'system-ui', 'sans-serif'],
          body:['Poppins', 'system-ui', 'sans-serif'],
        },
        backgroundImage: {
          'bg-section': "url('/assets/bg.jpg')",
          'bg-section2': "url('/assets/pc_media_logos.png')"
        },
        textColor: {
          'pairs': '#00c4cc'
        },
        borderColor: {
          'pairs': '#00c4cc'
        }
      },
    },
    variants: {
      extend: {},
    },
};
