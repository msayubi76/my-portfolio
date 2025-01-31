// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/custom-bootstrap.scss", "~/assets/custom.css", "swiper/css"],

  build: {
    transpile: ["bootstrap"],
  },
  // nitro: {
  //   prerender: {
  //     crawlLinks: false, // Stops Nuxt from auto-crawling links
  //     routes: ["/projects"], // Explicitly include the /projects route
  //   },
  // },
  app: {
    baseURL: "/my-portfolio/", // Ensure this matches your repo name
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: ["nuxt-swiper"],
});
