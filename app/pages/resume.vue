<script setup lang="ts">
import { experience, profile, skillGroups } from '~/data/portfolio'

useSeoMeta({
  title: 'Resume — Salah ud Din, Senior Laravel + Vue/Nuxt Developer',
  description: 'Resume of Salah ud Din, Senior Laravel + Vue/Nuxt developer: PHP, Laravel, MySQL, Vue.js, Nuxt.js, TypeScript, AWS and OpenAI API.'
})

const printResume = () => {
  if (import.meta.client) window.print()
}
</script>

<template>
  <div class="resume-page pb-14 pt-[6.5rem] sm:pb-[4.5rem] sm:pt-[7.5rem]">
    <div class="no-print mx-auto mb-5 flex w-[min(calc(100%-2rem),980px)] flex-col gap-3 sm:w-[min(calc(100%-2.5rem),980px)] sm:flex-row sm:items-center sm:justify-between">
      <NuxtLink to="/" class="text-sm font-bold text-[var(--muted)] transition hover:text-[var(--text)]">← Back to portfolio</NuxtLink>
      <div class="flex flex-col gap-2 sm:flex-row">
        <a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#101828] px-4 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d2939] theme-dark:bg-[var(--accent)] theme-dark:text-[#071015] theme-dark:hover:bg-[#70e5dc]" :href="profile.resumePdf" download><AppIcon name="download" :size="17" /> Download PDF</a>
        <button class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-bold text-[var(--text)] transition hover:border-[var(--border-strong)]" type="button" @click="printResume">Print</button>
      </div>
    </div>

    <article class="resume-sheet mx-auto w-[min(calc(100%-2rem),980px)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:w-[min(calc(100%-2.5rem),980px)] sm:p-9 lg:p-12">
      <header class="grid gap-6 border-b border-[var(--border)] pb-7 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h1 class="text-4xl font-[820] tracking-[-0.045em] text-[var(--text)] sm:text-[2.8rem]">Salah ud Din</h1>
          <p class="mt-2 text-sm font-bold text-[var(--accent)] sm:text-base">Senior Laravel + Vue/Nuxt Developer · PHP · MySQL · TypeScript · AWS · OpenAI API</p>
        </div>
        <div class="grid gap-1.5 text-sm text-[var(--muted)] md:text-right">
          <span>Islamabad, Pakistan · PKT (UTC+5)</span>
          <a class="transition hover:text-[var(--text)]" href="mailto:msayubi76@gmail.com">msayubi76@gmail.com</a>
          <a class="transition hover:text-[var(--text)]" href="https://salahuddin.pk">salahuddin.pk</a>
          <a class="transition hover:text-[var(--text)]" href="https://www.linkedin.com/in/msayubi76">linkedin.com/in/msayubi76</a>
          <a class="transition hover:text-[var(--text)]" href="https://github.com/msayubi76">github.com/msayubi76</a>
        </div>
      </header>

      <section class="border-b border-[var(--border)] py-7">
        <h2 class="text-xs font-black uppercase tracking-[0.15em] text-[var(--accent)]">Profile</h2>
        <p class="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.95rem]">Senior Laravel + Vue/Nuxt developer with 6+ years of experience, including 3 years leading engineering teams. I design and build multi-tenant SaaS end to end: Laravel APIs, financial and operational data models, Nuxt.js/Vue.js front-ends and AWS infrastructure. I currently run two production SaaS products solo: a Japan–UK vehicle export platform with OpenAI document extraction, and a transport accounting app on web, Windows and Android with offline sync and 778+ automated tests. Available immediately; remote, or relocation with visa sponsorship.</p>
      </section>

      <section class="border-b border-[var(--border)] py-7">
        <h2 class="text-xs font-black uppercase tracking-[0.15em] text-[var(--accent)]">Core skills</h2>
        <div class="mt-3 grid gap-2">
          <p v-for="group in skillGroups" :key="group.title" class="text-sm leading-6 text-[var(--muted)]"><strong class="font-extrabold text-[var(--text)]">{{ group.title }}:</strong> {{ group.skills.join(', ') }}</p>
        </div>
      </section>

      <section class="border-b border-[var(--border)] py-7">
        <h2 class="text-xs font-black uppercase tracking-[0.15em] text-[var(--accent)]">Experience</h2>
        <div class="mt-5 grid gap-7">
          <article v-for="item in experience" :key="item.role + item.company">
            <div class="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div><h3 class="text-base font-black text-[var(--text)]">{{ item.role }}</h3><p class="mt-0.5 text-sm font-bold text-[var(--accent)]">{{ item.company }}</p></div>
              <span class="text-xs font-bold uppercase tracking-[0.06em] text-[var(--muted-2)] sm:text-right">{{ item.period }}</span>
            </div>
            <p class="mt-2 text-sm leading-6 text-[var(--muted)]">{{ item.summary }}</p>
            <ul class="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--muted)]"><li v-for="point in item.points" :key="point">{{ point }}</li></ul>
          </article>
        </div>
      </section>

      <section class="border-b border-[var(--border)] py-7">
        <h2 class="text-xs font-black uppercase tracking-[0.15em] text-[var(--accent)]">Selected projects</h2>
        <div class="mt-5 grid gap-5 md:grid-cols-3">
          <article><h3 class="text-sm font-black text-[var(--text)]">Japan–UK Vehicle Exporter SaaS</h3><p class="mt-2 text-xs leading-6 text-[var(--muted)]">Solo production build: Laravel API, two Nuxt.js SSR apps, customer portal, multi-tenant RBAC, vehicle/shipping lifecycle, JPY/GBP finance, PDF invoices, and OpenAI extraction of auction sheets and Bills of Lading (strict JSON schema, matching against existing vehicles, user confirmation, per-request cost logging).</p></article>
          <article><h3 class="text-sm font-black text-[var(--text)]">Munshi Wala</h3><p class="mt-2 text-xs leading-6 text-[var(--muted)]">Own multi-tenant transport accounting SaaS for web, Windows and Android with offline-first sync, double-entry ledger, partnership accounting, 15+ PDF reports, English/Urdu localization and 778+ Pest tests.</p></article>
          <article><h3 class="text-sm font-black text-[var(--text)]">Real-Time Crypto Exchange</h3><p class="mt-2 text-xs leading-6 text-[var(--muted)]">Led web engineering across 5 trading modules, including TradingView charts and WebSocket market feeds; built serverless AWS chat with AppSync, Lambda, DynamoDB and GraphQL.</p></article>
        </div>
      </section>

      <section class="pt-7">
        <h2 class="text-xs font-black uppercase tracking-[0.15em] text-[var(--accent)]">Education</h2>
        <p class="mt-3 text-sm text-[var(--muted)]"><strong class="font-extrabold text-[var(--text)]">BS Computer Science</strong> — Federal Urdu University of Arts, Sciences and Technology, Islamabad · 2020</p>
      </section>
    </article>
  </div>
</template>
