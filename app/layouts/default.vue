<script setup lang="ts">
import { siteUrl } from '~/data/portfolio'

const route = useRoute()
const canonical = computed(() => siteUrl + (route.path === '/' ? '/' : route.path.replace(/\/$/, '')))

useHead(() => ({ link: [{ rel: 'canonical', href: canonical.value }] }))
useSeoMeta({ ogUrl: () => canonical.value })
</script>

<template>
  <div class="min-h-screen bg-[var(--bg)] text-[var(--text)]">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-sm focus:font-bold">Skip to content</a>
    <SiteNav />
    <main id="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
