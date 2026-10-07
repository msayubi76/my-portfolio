<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mb-9 max-w-3xl sm:mb-11 lg:mb-12">
    <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[0.8rem]">{{ eyebrow }}</p>
    <h2 class="text-[clamp(2rem,3.8vw,3.1rem)] font-[800] leading-[1.1] tracking-[-0.04em] text-[var(--text)]">{{ title }}</h2>
    <p v-if="description" class="mt-4 max-w-2xl text-[0.98rem] leading-[1.875rem] text-[var(--muted)] sm:text-[1.03rem]">{{ description }}</p>
  </div>
</template>
