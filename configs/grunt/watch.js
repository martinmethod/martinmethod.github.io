module.exports = {
  options: {
    livereload: false,
    event: ['changed', 'added', 'deleted']
  },

  markup: {
    files: ['src/markup/**/*.pug', 'src/model/**/*.json'],
    tasks: ['puglint', 'clean:markup', 'pug']
  },

  styles: {
    files: ['src/styles/**/*.scss', 'src/images/**/*.*'],
    tasks: ['scsslint', 'clean:styles', 'stripCssComments', 'compass']
  },

  favicons: {
    files: ['src/images/avatar.png'],
    tasks: ['realFavicon']
  }
};