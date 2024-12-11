import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Aristo',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/bidgen-logo.svg' }],
      meta: [
        {
          name: 'og:site_name',
          content: 'Aristo',
        },
        {
          name: 'keywords',
          content: 'Aristo',
        },
      ],
    },
  },

  devtools: { enabled: true },

  vite: {
    plugins: [eslintPlugin()],
  },

  css: ['~/assets/tailwind.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-12-11',
})