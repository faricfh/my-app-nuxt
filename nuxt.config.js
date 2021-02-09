const withSass = require('@zeit/next-sass')

module.exports = withSass({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-app-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss',
    '@/assets/css/login-adminlte.css',
    'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/site/login', method: 'post', propertyName: 'data' },
          logout: false,
          user: false,
        },
        // tokenRequired: true,
        // tokenType: 'Bearer '
      }
    }
  },

  axios: {
    baseURL: 'http://localhost/laravel-7/public'
  },

  router: {
    middleware: ['auth']
  },
})
