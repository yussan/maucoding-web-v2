// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 20231,
  },
  build: {
    transpile: ["axios"],
  },
  vite: {
    server: {},
  },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    /* */
  },
  alias: {
    "@": "/",
    "@components": "/components",
    "@public": "/public",
    "@helpers": "/helpers",
    "@consts": "/consts",
    "@services": "/services",
  },
  css: ["@public/assets/style/style.1.0.0.css"],
  meta: {
    title: "MauCoding - Tech From Engineer Perspective",
    description:
      "MauCoding by YMG, kami membahas seputar dunia tech dari Enginer Perspective. Saat ini berfokus pada dunia software development.",
  },
  runtimeConfig: {
    public: {
      APP_KEY: process.env.APP_KEY,
    },
  },
});
