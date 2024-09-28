import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: {
    enabled: true
  },

  modules: [
    '@primevue/nuxt-module',
    'nuxt-icons',
    '@nuxt/devtools',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  ssr: false,

  nitro: {
    prerender: {
      failOnError: true
    }
  },

  app: {
    buildAssetsDir: '/nuxt/',
    head: {
      title: "SISNA",
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  hooks: {
    'prerender:routes'({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    }
  },

  router: {
    options: {
      hashMode: true
    }
  },

  css: [
    'primeicons/primeicons.css',
    'assets/css/tailwind.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {

    usePrimeVue: true,

    options: {
      unstyled: false,
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: false
        }
      }
    },

    components: {
      include: ['Button', 'Panel', 'Image', 'Divider', 'MegaMenu', 'ToggleButton', 'ToggleSwitch', 'ProgressSpinner', 'Toast']
    },
  },

  i18n: {
    locales: [
      {
        code: 'it',
        file: 'it-IT.ts'
      },
    ],
    lazy: true,
    langDir: 'lang',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    defaultLocale: 'it'
  },

  compatibilityDate: '2024-08-05',

  colorMode: {
    preference: 'light'
  }
})