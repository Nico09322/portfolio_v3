// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss'
  ],
  fonts: {
    families: [
      {name: 'Taviraj', provider: 'google', weights: ['100','200','300','400','500','600','700','800','900']},
      {name: 'Kavoon', provider: 'google'},
      {name: 'Raleway', provider: 'google', weights: ['100','200','300','400','500','600','700','800','900']}
    ]
  },
  runtimeConfig: {
    strapiToken: process.env.TOKEN,
  }
})