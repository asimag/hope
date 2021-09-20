export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
            "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './node_modules/vue-select/dist/vue-select.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-tables-2.js',
    '~plugins/vue-select-2.js',
    '~plugins/vue-toasted.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
      // Sweet Alert 2
    'vue-sweetalert2/nuxt',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'http://hope.test',
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    }
  },
  router: {
    middleware: ['auth']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://hope.test/api'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
