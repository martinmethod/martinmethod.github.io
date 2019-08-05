var browser = process.platform === 'win32' ? 'Chrome' : '/Applications/Google Chrome.app';

module.exports = {
  dev : {
    app: browser,
    path: 'http://localhost:8000'
  },

  prod : {
    app: browser,
    path: 'http://martinmetodiev.com'
  },

  build: {
    app: browser,
    path: 'https://travis-ci.org/martinmethod/martinmethod.github.io/builds'
  },

  repo: {
    app: browser,
    path: 'https://github.com/martinmethod/martinmethod.github.io'
  }
};