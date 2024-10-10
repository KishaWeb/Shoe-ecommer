/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    }, 
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      fontSize: {
        '11xl': '9rem',
        '12xl': '12rem',
      },

      colors: {
        'text': '#02030d',
        'background': '#fafafc',
        'primary': '#3deb4e',
        'secondary': '#ed8782',
        'accent': '#e6cd51',
       },
       borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'xl': '18px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '56px',
        '8xl': '64px',
        '9xl': '72px',
        '10xl': '80px',
        '11xl': '88px',
        '12xl': '96px',
        'full': '9999px',
      }
       
    },
  },
  plugins: [],
}
