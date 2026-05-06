/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a6cff',
        secondary: '#00c9a7',
        accent: '#ff6b35',
        dark: '#1e2d4a',
        light: '#f0f7ff',
        neon: '#3d9bff',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26, 108, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(61, 155, 255, 1)' },
        },
      },
      backdropFilter: {
        glass: 'blur(10px)',
      },
    },
  },
  plugins: [],
}
