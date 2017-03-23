var grunt = require('grunt');

module.exports = {
  task: {
    options: {
      separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
      stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
    },
    src: [
      'node_modules/css-browser-selector/css_browser_selector.min.js'
    ],
    dest: 'dist/assets/js/<%= pkg.name %>_bundle.js'
  }
};