import 'dotenv/config'
import path from 'path'
import fs from 'fs'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    port: process.env.PORT,
    middleware: ['password-protect']

  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.TITTLE,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Louis photography'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/reset.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/plugins.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/style.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/style-dark.css'},
    ],
    script: [
      {
        src: "/js/jquery.min.js",
        type: 'text/javascript',
        body: true
      },
      {
        src: "/js/plugins.js",
        type: 'text/javascript',
        body: true
      },
      {
        src: "/js/scripts.js",
        type: 'text/javascript',
        body: true, defer: true
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/init.js', ssr: false}

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-password-protect',
  ],
  passwordProtect: {
    enabled: false,
    formPath: '/password',
    password: process.env.SIMPLE_PASSWORD_PROTECT,
    tokenSeed: 101010,
    queryString: '_pw',
    cookieName: '_password',
    cookie: {
      prefix: '',
      expires: 5
    },
    ignoredPaths: ['/public-page']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `${process.env.BASE_DOMAIN}:${process.env.PORT}/`,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  }
}
