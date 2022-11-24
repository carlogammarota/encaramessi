export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'encara-messi',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: 'https://vjs.zencdn.net/7.20.3/video-js.css' },

  ],
    script: [
      {
        src: "~/plugins/videojs-contrib-hls.js",
        src: "~/plugins/gtag",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'main.css'
  ],
  script: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/feathers.js", mode: "client" },
    { src: "~/plugins/video-player.js", mode: "client" },
    // { src: "~/plugins/video-player.js"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    ['@nuxtjs/google-analytics', {
      id: 'G-VJ8N8WV0RP'
    }]
  ],
  googleAnalytics: {
    id: 'G-VJ8N8WV0RP'
  },
  // 'google-gtag':{
  //   id: 'G-VJ8N8WV0RP', // required
  //   config:{
  //     // this are the config options for `gtag
  //     // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
  //     anonymize_ip: true, // anonymize IP 
  //     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
  //     linker:{
  //       domains:['domain.com','domain.org']
  //     }
  //   },
  //   debug: true, // enable to track in dev mode
  //   disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
  //   // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
  //   additionalAccounts:[{
  //     id: 'AW-XXXX-XX', // required if you are adding additional IDs
  //     config:{
  //       send_page_view:false // optional configurations
  //     }
  //   }]
  // },
  // modules:  ['@nuxtjs/google-gtag', { /* module options */ }], 

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: ['@nuxtjs/tailwindcss'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
