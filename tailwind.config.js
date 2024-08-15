/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#0c4a6e',
        dark : '#1e293b',
        light : '#e0f2fe',
        secondary : '#64748b',
        inverse : '#7dd3fc'
      },
      backgroundImage: {
        'dot-pattern': "url('/dist/img/wallpaper-dot-pattern.jpg')"
      }
    },
  },
  plugins: [],
}