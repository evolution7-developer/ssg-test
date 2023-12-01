// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public:{
      apiUrl: process.env.API_BASE_URL
    }
     
  }
})
