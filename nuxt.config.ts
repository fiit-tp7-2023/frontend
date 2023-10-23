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
  modules: ["@sidebase/nuxt-auth", "nuxt-icon"],
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? ["naive-ui", "vueuc", "@css-render/vue3-ssr", "@juggle/resize-observer"]
        : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === "development" ? ["naive-ui", "vueuc", "date-fns-tz/formatInTimeZone"] : [],
    },
  },
});
