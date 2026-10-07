<script setup lang="ts">
const { public: { cfBeaconToken } } = useRuntimeConfig()

// Cookie-less Cloudflare Web Analytics; only injected when a token is configured.
if (cfBeaconToken) {
  useHead({
    script: [{
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': JSON.stringify({ token: cfBeaconToken })
    }]
  })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
