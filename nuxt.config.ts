// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  auth: {
    enableGlobalAppMiddleware: true,
  },
  runtimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  modules: ["@sidebase/nuxt-auth"],
});
