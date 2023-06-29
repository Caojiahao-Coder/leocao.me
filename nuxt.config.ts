export default defineNuxtConfig({
  app: {
    head: {
      title: 'Leo Cao'
    }
  },

  runtimeConfig: {
    public: {
      apiBase: '/api',
    }
  },

  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
        sepia: 'monokai'
      }
    }
  },

  devtools: {
    enabled: true
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt', '@nuxt/content'],

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
