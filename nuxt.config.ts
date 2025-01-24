// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["bootstrap/dist/css/bootstrap.min.css"],
  build: {
    transpile: ["bootstrap"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
