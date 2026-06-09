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
      title: "Salah-ud-Din",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "jprAX6xAj1nBNoAZVvGr0feBGZdfTWOEDVr1qzCHO5c",
        },
      ],

      // <meta name="google-site-verification" content="jprAX6xAj1nBNoAZVvGr0feBGZdfTWOEDVr1qzCHO5c" />
      link: [
        {
          rel: "stylesheet",
          href: baseUrl + "libraries/lightgallery-bundle.css",
        },
        { rel: "icon", type: "image/png", href: "/images/favicon.png" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
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
