import webpack from 'webpack';
import banner from './banner.js';
import { id as ga } from './config/ga.json';

import { author, description, homepage, title } from './package.json';

const envIsDev = process.env.NODE_ENV === 'development';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { 'http-equiv': 'ScreenOrientation', content: 'autoRotate:disabled' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      // Twitter Card
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${homepage}/cover.png` },
      { name: 'twitter:image:alt', content: title }
    ],
    link: [
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/1136x640.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        href: '/splashscreens/2436x1125.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/1792x828.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/828x1792.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/1334x750.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        href: '/splashscreens/1242x2688.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        href: '/splashscreens/2208x1242.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        href: '/splashscreens/1125x2436.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        href: '/splashscreens/1242x2208.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/2732x2048.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        href: '/splashscreens/2688x1242.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/2224x1668.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/750x1334.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/2048x2732.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/2388x1668.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/1668x2224.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/640x1136.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/1668x2388.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        href: '/splashscreens/2048x1536.png'
      },
      {
        rel: 'apple-touch-startup-image',
        media:
          'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        href: '/splashscreens/1536x2048.png'
      }
    ]
  },

  /*
   ** Customize the progress-bar
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [
    'normalize.css/normalize.css',
    '@assets/styles/global/font-faces.scss',
    '@assets/styles/global/scaffolding.scss',
    '@assets/styles/global/app.scss',
    '@assets/styles/global/print.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/stylelint-module',
      {
        files: ['./components/**/*.scss'],
        syntax: 'scss',
        configFile: '.stylelintrc'
      }
    ]
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: ga
      }
    ],
    [
      '@nuxtjs/pwa',
      {
        meta: {
          mobileAppIOS: true,
          favicon: true,
          name: title,
          author: author.name,
          description,
          theme_color: '#ffffff',
          ogHost: 'http://martinmetodiev.com',
          twitterCard: 'summary',
          twitterSite: '@martinmetodiev'
        },
        manifest: {
          name: title,
          short_name: `${author.name.split(' ')[0]} ${author.name
            .split(' ')[1]
            .charAt(0)}.`,
          display: 'standalone',
          dir: 'ltr',
          description,
          orientation: 'portrait',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          serviceworker: {
            src: '../sw.js'
          }
        }
      }
    ]
  ],

  /*
   ** Style resources
   */
  styleResources: {
    scss: [
      '~assets/styles/resources/base.scss',
      '~assets/styles/resources/functions/**/*.scss',
      '~assets/styles/resources/data/swatches/primary/**/*.scss',
      '~assets/styles/resources/data/swatches/secondary/**/*.scss',
      '~assets/styles/resources/data/roles/**/*.scss',
      '~assets/styles/resources/mixins/**/*.scss'
      // '~assets/styles/resources/placeholders/**/*.scss'
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    cssSourceMap: envIsDev,

    postcss: {
      plugins: {
        'postcss-easing-gradients': {},
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {},
        'postcss-utilities': {},
        'postcss-import': {},
        'css-mqpacker': {},
        'postcss-discard-comments': {
          removeAll: true
        }
      }
    },

    loaders: {
      cssModules: {
        localsConvention: 'dashes',
        modules: {
          localIdentName: envIsDev
            ? '[name]__[local]__[hash:base64:5]'
            : '[hash:base64:5]'
        }
      }
    },

    plugins: envIsDev ? [] : [new webpack.BannerPlugin({ banner })]
  }
};
