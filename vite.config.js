
// vite.config.js
export default {
    root: "./src",  
    build: {
      outDir: 'dist', // Output directory for production build,
      exclude: ['node_modules/**'],
    },
    watch: [
      'src/**/*.js',   // Only watch JavaScript files in the src directory
      'index.html'     // Watch the main HTML file
    ]
  };