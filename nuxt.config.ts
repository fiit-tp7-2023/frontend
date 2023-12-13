// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  auth: {
    enableGlobalAppMiddleware: process.env.VERCEL_ENV !== 'preview',
    origin: process.env.AUTH_ORIGIN ?? 'http://localhost:3000',
  },
  runtimeConfig: {
    restApiUrl: process.env.REST_API_URL,
    googleRefreshTokenUrl: process.env.GOOGLE_REFRESH_TOKEN_URL,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authSecret: process.env.AUTH_SECRET,
    public: {
      vercelEnv: process.env.VERCEL_ENV,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    'nuxt-icon',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@bg-dev/nuxt-naiveui',
    '@nuxt/content',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  content: {
    contentHead: false,
  },
});
