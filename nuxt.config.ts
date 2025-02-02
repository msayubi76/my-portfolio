// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/scss/custom-bootstrap.scss"
  ],

  build: {
    transpile: ["bootstrap"],
  },
  app: {
    baseURL: "/my-portfolio/", // Ensure this matches your repo name
  },
  nitro: {
    prerender: {
      routes: [
        "/my-portfolio/projects/crypto-exchange-platform",
        "/my-portfolio/projects/pluto-pakistan",
        "/my-portfolio/projects/e-procurement",
        "/my-portfolio/projects/jdm-trading",
        "/my-portfolio/projects/school-management",
      ],
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: ["nuxt-swiper"],
});
