import tailwindcss from '@tailwindcss/vite'

const themeScript = `(function(){try{var m=document.cookie.match(/(?:^|; )portfolio-theme=(light|dark)/);var t=m?m[1]:(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var d=document.documentElement;if(t==='dark')d.classList.add('theme-dark');d.dataset.theme=t;}catch(e){}})();`

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2026-01-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  runtimeConfig: {
    public: {
      // Cloudflare Web Analytics token. Set NUXT_PUBLIC_CF_BEACON_TOKEN before `npm run generate`.
      cfBeaconToken: ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Salah ud Din — Senior Laravel + Vue/Nuxt Developer',
      meta: [
        { name: 'description', content: 'Senior Laravel + Vue/Nuxt developer with 6+ years building multi-tenant SaaS, fintech and AI document extraction with PHP, Laravel, MySQL, Vue.js, Nuxt.js and AWS.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Salah ud Din' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#f8fafc', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#080c15', media: '(prefers-color-scheme: dark)' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        { innerHTML: themeScript, tagPosition: 'head' }
      ]
    }
  },
  // Old salahuddin.pk URLs that are still linked from GitHub/LinkedIn
  routeRules: {
    '/projects/e-procurement': { redirect: { to: '/work/procurosis', statusCode: 301 } },
    '/projects/**': { redirect: { to: '/#work', statusCode: 301 } }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/resume']
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
