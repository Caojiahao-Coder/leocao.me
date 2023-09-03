export default defineNuxtConfig({
  ssr: false,
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
    enabled: true,
  },

  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@pinia/nuxt', '@nuxt/content'],

  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
  },
})
