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

  // 配置 unocss for nuxt
  modules: [
    '@unocss/nuxt'
  ]
})
