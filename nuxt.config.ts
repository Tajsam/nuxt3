// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'nuxt tut',
      meta: [{ name: 'description', content: 'Every thing about nuxt' }],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }]
    }
  },
  runtimeConfig: {
    currencykey: process.env.CURRENCY_API_KEY
  }
})
