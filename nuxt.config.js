import meta from 'dev-assets/configs/nuxt/meta';
import splashscreens from 'dev-assets/configs/nuxt/splashscreens';
import buildModules from 'dev-assets/configs/nuxt/buildModules';
import modules from 'dev-assets/configs/nuxt/modules';
import build from 'dev-assets/configs/nuxt/build';
import banner from 'dev-assets/configs/nuxt/banner';
import css from 'mm-atomic-pack/configs/nuxt/css';
import styleResources from 'mm-atomic-pack/configs/nuxt/styleResources';
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
