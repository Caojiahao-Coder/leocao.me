export default defineNuxtConfig({
  app: {
    head: {
      title: 'Leo Cao'
    }
  },

  runtimeConfig: {
    public: {
      apiBase: '/api',
      mongoDB: process.env.VUE_APP_MONGODB
    }
  },

  devtools: {
    enabled: true
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt'],
})
