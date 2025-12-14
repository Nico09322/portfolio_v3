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
      strapiToken: "db7a7c0b3c8dda12b126e2a1558a8fc05f3654de8e95cbf21a4c469fca73f78e7067a6b70da0add7ae8de3d6a37f368c0ea8e4c0eb6164d0b3827fad1d9ec259046cbaa63e7700a5936e8ec686bd52495755985ce5aec6a764850f4c7e414da2b5a7c168a8f4d6bf254822bbba7ae7952a5f6a143e0950fe17a91e9e7a65231b",
  }
})