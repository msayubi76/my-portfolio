<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
        <ScrollToTop />
    </div>
</template>

<script setup>
useHead({
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-LWYG3NXPPV",
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LWYG3NXPPV');
      `,
      type: "text/javascript",
    },
  ],
});
</script>
