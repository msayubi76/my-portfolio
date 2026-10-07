<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (is404.value ? 'Page not found — Salah ud Din' : 'Something went wrong — Salah ud Din'),
  robots: 'noindex'
})

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="mx-auto grid min-h-[70vh] w-[min(calc(100%-2rem),720px)] place-content-center py-32 text-center">
      <p class="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{{ error.statusCode }}</p>
      <h1 class="mt-3 text-[clamp(2.2rem,5vw,3.4rem)] font-[820] leading-[1.05] tracking-[-0.045em] text-[var(--text)]">{{ is404 ? 'This page doesn’t exist.' : 'Something went wrong.' }}</h1>
      <p class="mt-4 text-base leading-8 text-[var(--muted)]">{{ is404 ? 'The link may be old or mistyped. The work and resume are one click away.' : 'Please try again, or head back to the homepage.' }}</p>
      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] bg-[#101828] px-5 text-sm font-bold text-white transition hover:bg-[#1d2939] theme-dark:bg-[var(--accent)] theme-dark:text-[#071015]" @click="goHome">Back to homepage</button>
        <NuxtLink to="/resume" class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-extrabold text-[var(--text)] transition hover:border-[var(--border-strong)]">View resume</NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>
