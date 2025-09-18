/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chisco: {
          black: '#0B0B0D',
          ink: '#12141A',
          navy: '#DC2626',
          petrol: '#EA580C',
          amber: '#F6A800',
          steel: '#6B7280',
          surface: '#F8FAFC'
        },
        danger: '#E11D48',
        success: '#059669'
      },
      fontFamily: {
        heading: ['var(--font-afacad)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      borderRadius: {
        xl: '1rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    },
  },
  plugins: [],
}