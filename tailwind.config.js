/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: '#c8ff58',
        ink: '#050505',
        soft: '#f5f5f1',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}
