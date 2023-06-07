export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },

  devtools: {
    enabled: true
  },

  app: {
    pageTransition: { name: 'page', mode: "out-in" }
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],
})
