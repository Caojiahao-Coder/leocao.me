export default defineNuxtConfig({
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
