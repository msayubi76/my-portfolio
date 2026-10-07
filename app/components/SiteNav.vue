<script setup lang="ts">
import { profile } from '~/data/portfolio'

const menuOpen = ref(false)
const route = useRoute()
const { isLight, toggleTheme } = useTheme()

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'AI', href: '/#ai' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'How I work', href: '/#about' }
]

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="site-header fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--nav-bg)]">
    <nav class="mx-auto flex h-[72px] w-[min(calc(100%-2rem),1180px)] items-center justify-between gap-4 sm:w-[min(calc(100%-2.5rem),1180px)]" aria-label="Primary navigation">
      <NuxtLink to="/" class="inline-flex min-w-max items-center gap-2.5 rounded-xl" aria-label="Salah ud Din — Home">
        <span class="grid h-9 w-9 place-items-center rounded-[11px] bg-gradient-to-br from-[#0f766e] to-[#6757d9] text-[0.7rem] font-black tracking-tight text-white shadow-[0_8px_24px_rgba(15,118,110,.18)] theme-dark:from-[#52e6d8] theme-dark:to-[#7c6cff] theme-dark:text-[#071015]">SD</span>
        <span class="grid leading-tight">
          <strong class="text-[0.9rem] font-[760] tracking-[-0.018em] text-[var(--text)]">Salah ud Din</strong>
          <small class="mt-0.5 text-[0.66rem] font-medium text-[var(--muted-2)]">{{ profile.shortTitle }}</small>
        </span>
      </NuxtLink>

      <div class="ml-auto hidden items-center gap-7 lg:flex">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href" class="text-[0.84rem] font-semibold text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)]">{{ link.label }}</NuxtLink>
        <NuxtLink to="/resume" class="text-[0.84rem] font-bold text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">Resume</NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <button class="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:text-[var(--text)]" type="button" :aria-label="isLight ? 'Switch to dark theme' : 'Switch to light theme'" @click="toggleTheme">
          <AppIcon :name="isLight ? 'moon' : 'sun'" :size="18" />
        </button>
        <a class="hidden min-h-10 items-center justify-center rounded-xl bg-[#101828] px-4 text-[0.82rem] font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d2939] theme-dark:bg-[var(--accent)] theme-dark:text-[#071015] theme-dark:hover:bg-[#70e5dc] sm:inline-flex" :href="`mailto:${profile.email}`">Let's talk</a>
        <button class="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] shadow-sm transition hover:border-[var(--border-strong)] hover:text-[var(--text)] lg:hidden" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
          <AppIcon :name="menuOpen ? 'x' : 'menu'" :size="20" />
        </button>
      </div>
    </nav>

    <div v-show="menuOpen" id="mobile-navigation" class="border-t border-[var(--border)] bg-[var(--nav-bg)] px-4 py-3 backdrop-blur-xl lg:hidden">
      <div class="mx-auto grid w-full max-w-[1180px] gap-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow-soft)]">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href" class="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text)]">{{ link.label }}</NuxtLink>
        <NuxtLink to="/resume" class="rounded-xl px-4 py-3 text-sm font-bold text-[var(--text)] transition hover:bg-[var(--surface-2)]">Resume</NuxtLink>
        <a class="mt-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#101828] px-4 text-sm font-bold text-white theme-dark:bg-[var(--accent)] theme-dark:text-[#071015] sm:hidden" :href="`mailto:${profile.email}`">Let's talk</a>
      </div>
    </div>
  </header>
</template>
