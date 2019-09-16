import meta from 'mm-atomic-pack/configs/nuxt/meta';
import css from 'mm-atomic-pack/configs/nuxt/css';
import styleResources from 'mm-atomic-pack/configs/nuxt/styleResources';
import splashscreens from 'mm-atomic-pack/configs/nuxt/splashscreens';
import buildModules from 'mm-atomic-pack/configs/nuxt/buildModules';
import modules from 'mm-atomic-pack/configs/nuxt/modules';
import build from 'mm-atomic-pack/configs/nuxt/build';
import banner from 'mm-atomic-pack/configs/nuxt/banner';
import { author, description, homepage, title, version } from './package.json';
import { googleAnalyticsCode, googleSiteVerification } from './site.json';

require('dotenv').config();

export default {
  mode: 'universal',

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
    link: [...splashscreens]
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
  modules: [...modules({ googleAnalyticsCode, title, author, description })],

  /*
   ** Build configuration
   */
  build: build({ banner: banner({ title, homepage, author, version }) })
};
