// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [eslintPlugin()],
  },
  css: ['~/assets/tailwind.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
})
