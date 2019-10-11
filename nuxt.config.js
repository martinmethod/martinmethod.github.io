import meta from 'dev-assets/config/nuxt/meta';
import splashscreens from 'dev-assets/config/nuxt/splashscreens';
import buildModules from 'dev-assets/config/nuxt/buildModules';
import modules from 'dev-assets/config/nuxt/modules';
import build from 'dev-assets/config/nuxt/build';
import banner from 'dev-assets/config/nuxt/banner';
import css from 'mm-atomic-pack/config/nuxt/css';
import styleResources from 'mm-atomic-pack/config/nuxt/styleResources';
import { author, description, homepage, title, version } from './package.json';
import { googleAnalyticsCode, googleSiteVerification } from './site.json';

export default {
  mode: 'universal',

  server: {
    port: 9000
  },

  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      {
        name: 'google-site-verification',
        content: googleSiteVerification
      },
      ...meta({ title, description, homepage })
    ],
    link: [...splashscreens],
    bodyAttrs: {
      ontouchstart: ''
    }
  },

  /*
   ** Customize the progress-bar
   */
  loading: false,

  /*
   ** Style resources
   */
  styleResources,

  /*
   ** Global CSS
   */
  css,

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [...buildModules()],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    ...modules({
      googleAnalyticsCode,
      title,
      author,
      description,
      twitter: '@martinmetodiev'
    })
  ],

  /*
   ** Build configuration
   */
  build: build({ banner: banner({ title, homepage, author, version }) })
};
