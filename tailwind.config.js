/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004F71',    // Deep Azure
        accent: '#F24E1E',     // Vibrant Persimmon
        'neutral-dark': '#1E293B',
        'neutral-light': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1E293B',
            a: {
              color: '#004F71',
              '&:hover': {
                color: '#F24E1E',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 