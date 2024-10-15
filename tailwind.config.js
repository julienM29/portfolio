module.exports = {
  content: [
    './*.html',          // Tous les fichiers HTML à la racine
    './**/*.html', 
    './src/**/*.{js,ts,jsx,tsx}', // Si tu as d'autres fichiers JavaScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
