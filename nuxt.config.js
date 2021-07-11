export default {
  target: 'static',
  head: {
    title: 'currency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter&display=swap' },
    ],
  },
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/style/global.scss',
    '~/style/font-awesome.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-notifications.js', ssr: false },
  ],
  router: {
    linkActiveClass: 'active-link',
    mode: 'history',
    base: '/currencies/',
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/router',
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
  ],
  axios: {
    https: true,
  },
  build: {
    vendor: ['@nuxtjs/axios'],
  },
};
