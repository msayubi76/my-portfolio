// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = "/";
// my-portfolio/
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["~/assets/scss/custom-bootstrap.scss"],

  build: {
    transpile: ["bootstrap"],
  },
  app: {
    baseURL: baseUrl, // Ensure this matches your repo name
    head: {
      link: [
        {
          rel: "stylesheet",
          href: baseUrl + "libraries/lightgallery-bundle.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          defer: true, // Ensures the script is loaded after the DOM is ready
        },
        {
          src: baseUrl + "libraries/lightgallery.umd.js",
          defer: true, // Ensures the script is loaded after the DOM is ready
        },
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
