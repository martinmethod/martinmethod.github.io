module.exports = {

  // Plugins' assets
  plugins: {
    files: [{
      expand: true,
      cwd: 'src/plugins',
      src: ['**'],
      dest: 'dist/plugins/'
    }]
  }

};