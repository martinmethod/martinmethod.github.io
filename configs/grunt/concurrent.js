module.exports = {

  build: [
    // favicons
    ['realFavicon'],

    // markup
    ['pug'],

    // styles
    ['stripCssComments', 'sass'],

    // scripts
    ['concat', 'uglify']
  ],

  prod: [
    'htmlmin'
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]

};