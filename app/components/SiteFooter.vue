<script setup lang="ts">
import { profile } from '~/data/portfolio'

const currentYear = useState('portfolio-current-year', () => new Date().getUTCFullYear())
</script>

<template>
  <footer class="site-footer border-t border-[var(--border)] bg-[var(--bg-soft)]">
    <div class="mx-auto grid w-[min(calc(100%-2rem),1180px)] gap-8 py-9 sm:w-[min(calc(100%-2.5rem),1180px)] md:grid-cols-[1fr_auto] md:items-end lg:py-11">
      <div class="max-w-2xl">
        <NuxtLink to="/" class="inline-flex items-center gap-2.5 rounded-xl">
          <span class="grid h-9 w-9 place-items-center rounded-[11px] bg-gradient-to-br from-[#0f766e] to-[#6757d9] text-[0.7rem] font-black text-white theme-dark:from-[#52e6d8] theme-dark:to-[#7c6cff] theme-dark:text-[#071015]">SD</span>
          <span class="grid leading-tight">
            <strong class="text-[0.9rem] font-bold text-[var(--text)]">Salah ud Din</strong>
            <small class="mt-0.5 text-[0.66rem] text-[var(--muted-2)]">{{ profile.title }}</small>
          </span>
        </NuxtLink>
        <p class="mt-4 max-w-xl text-[0.86rem] leading-6 text-[var(--muted)]">{{ profile.location }} · {{ profile.timezone }} · {{ profile.availability }}.</p>
      </div>
      <div class="flex flex-wrap gap-2.5 md:justify-end">
        <a :href="`mailto:${profile.email}`" class="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[0.82rem] font-semibold text-[var(--muted)] shadow-sm transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"><AppIcon name="mail" :size="16" /> Email</a>
        <a href="https://www.linkedin.com/in/msayubi76" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[0.82rem] font-semibold text-[var(--muted)] shadow-sm transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"><AppIcon name="linkedin" :size="16" /> LinkedIn</a>
        <a href="https://github.com/msayubi76" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2.5 text-[0.82rem] font-semibold text-[var(--muted)] shadow-sm transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"><AppIcon name="github" :size="16" /> GitHub</a>
      </div>
    </div>
    <div class="mx-auto flex w-[min(calc(100%-2rem),1180px)] flex-col gap-2 border-t border-[var(--border)] py-5 text-[0.72rem] text-[var(--muted-2)] sm:w-[min(calc(100%-2.5rem),1180px)] sm:flex-row sm:items-center sm:justify-between">
      <span>© {{ currentYear }} Salah ud Din</span>
      <span>Built with Nuxt 4, TypeScript and Tailwind CSS v4</span>
    </div>
  </footer>
</template>
