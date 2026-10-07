<script setup lang="ts">
import { aiPipeline, experience, profile, projects, siteUrl, skillGroups, testimonials, type Project } from '~/data/portfolio'

useSeoMeta({
  title: 'Salah ud Din — Senior Laravel + Vue/Nuxt Developer',
  description: 'Senior Laravel + Vue/Nuxt developer with 6+ years building multi-tenant SaaS, fintech and OpenAI document extraction with PHP, Laravel, MySQL, Vue.js, Nuxt.js and AWS.',
  ogTitle: 'Salah ud Din — Senior Laravel + Vue/Nuxt Developer',
  ogDescription: 'Multi-tenant Laravel SaaS, real-time fintech frontends and OpenAI document extraction in production.',
  ogImage: `${siteUrl}/og-card.png`
})

const featuredProjects = computed(() => projects.filter(project => project.featured))
const moreProjects = computed(() => projects.filter(project => !project.featured))

const coreStack = ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Nuxt.js', 'TypeScript', 'OpenAI API', 'AWS', 'Docker'] as const

const metrics = [
  { n: '2', t: 'production SaaS products I run on my own' },
  { n: '778+', t: 'automated tests on Munshi Wala' },
  { n: '5', t: 'trading modules in a live crypto exchange' },
  { n: '3 yrs', t: 'leading engineering teams' }
] as const

const principles = [
  { icon: 'server', title: 'Tenancy is enforced, not trusted', text: 'In both of my SaaS products the tenant is resolved on the server and every query is scoped. Isolation has its own tests, so a leak fails the build.' },
  { icon: 'code', title: 'Money is calculated in one place', text: 'Exchange rates, commissions and balances are computed in Laravel services, and ledgers are rebuilt from source records. Front-ends only display numbers.' },
  { icon: 'check', title: 'Tests where mistakes cost money', text: 'Munshi Wala has 778+ Pest tests plus a generated test pack that checks report figures against live data.' },
  { icon: 'users', title: 'I lead from the code', text: 'At Digital Code I reviewed every frontend change, kept five modules on shared components and mentored junior developers.' }
] as const

const accentMap: Record<Project['accent'], string> = {
  cyan: '#52e6d8',
  violet: '#a78bfa',
  amber: '#f5b866',
  green: '#75e6a4'
}

const projectAccent = (project: Project) => ({ '--project-accent': accentMap[project.accent] })

const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: siteUrl,
      jobTitle: profile.title,
      email: `mailto:${profile.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Islamabad', addressCountry: 'PK' },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: ['Laravel', 'PHP', 'Nuxt.js', 'Vue.js', 'TypeScript', 'MySQL', 'AWS', 'OpenAI API', 'Multi-tenant SaaS']
    })
  }]
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden pb-14 pt-28 sm:pb-[4.5rem] sm:pt-32 lg:pb-[5.5rem] lg:pt-36 [background:radial-gradient(circle_at_78%_22%,rgba(82,230,216,.09),transparent_28%),radial-gradient(circle_at_92%_55%,rgba(139,92,246,.09),transparent_27%)]">
      <div class="mx-auto grid w-[min(calc(100%-2rem),1180px)] items-center gap-12 sm:w-[min(calc(100%-2.5rem),1180px)] lg:min-h-[560px] lg:grid-cols-[1.04fr_.96fr] lg:gap-14 xl:gap-[4.5rem]">
        <div>
          <div class="mb-5 flex flex-wrap items-center gap-3">
            <img v-if="profile.photo" :src="profile.photo" :alt="`Photo of ${profile.name}`" width="56" height="56" class="h-14 w-14 rounded-full border-2 border-[var(--surface)] object-cover shadow-[var(--shadow-card)]">
            <div class="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[rgba(22,128,61,.25)] bg-[rgba(117,230,164,.10)] px-3 py-2 text-xs font-semibold leading-5 text-[var(--muted)] sm:text-[0.78rem]">
              <span class="h-2 w-2 shrink-0 rounded-full bg-[var(--success)] shadow-[0_0_0_5px_rgba(117,230,164,.12)]"></span>
              <span>Available now · remote, contract or full-time</span>
            </div>
          </div>

          <p class="mb-3.5 text-xs font-extrabold uppercase tracking-[0.13em] text-[var(--accent)] sm:text-sm">{{ profile.title }}</p>
          <h1 class="max-w-[760px] text-[clamp(2.6rem,5.6vw,4.9rem)] font-[820] leading-[1] tracking-[-0.05em] text-[var(--text)]">
            I build Laravel SaaS
            <span class="bg-gradient-to-r from-[#0f766e] via-[#0369a1] to-[#6d28d9] bg-clip-text text-transparent theme-dark:from-[#52e6d8] theme-dark:via-[#6cc7ff] theme-dark:to-[#a686ff]">from schema to screen.</span>
          </h1>
          <p class="mt-6 max-w-2xl text-[1rem] leading-[1.875rem] text-[var(--muted)] sm:text-[1.08rem] lg:text-[1.12rem]">
            6+ years with <strong class="font-semibold text-[var(--text)]">PHP, Laravel, MySQL, Vue.js and Nuxt.js</strong>. I currently run two production multi-tenant SaaS products on my own: a Japan–UK vehicle export platform that reads shipping documents with OpenAI, and an offline-first accounting app for web, Windows and Android.
          </p>

          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] bg-[#101828] px-5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(15,23,42,.14)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d2939] theme-dark:bg-[var(--accent)] theme-dark:text-[#071015] theme-dark:hover:bg-[#70e5dc]" href="#work">See the work <AppIcon name="arrow-right" :size="18" /></a>
            <a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-extrabold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]" :href="profile.resumePdf" download>Download resume (PDF) <AppIcon name="download" :size="17" /></a>
          </div>

          <div class="mt-7 grid gap-4 border-t border-[var(--border)] pt-6 min-[520px]:grid-cols-2 xl:grid-cols-3">
            <div class="flex items-start gap-2.5 text-[var(--muted-2)]">
              <AppIcon name="map-pin" :size="17" class="mt-0.5 shrink-0" />
              <span class="grid leading-snug"><strong class="text-sm font-bold text-[var(--text)]">{{ profile.location }}</strong><small class="mt-1 text-xs">{{ profile.relocation }}</small></span>
            </div>
            <div class="flex items-start gap-2.5 text-[var(--muted-2)]">
              <AppIcon name="globe" :size="17" class="mt-0.5 shrink-0" />
              <span class="grid leading-snug"><strong class="text-sm font-bold text-[var(--text)]">{{ profile.timezone }}</strong><small class="mt-1 text-xs">{{ profile.hours }}</small></span>
            </div>
            <div class="flex items-start gap-2.5 text-[var(--muted-2)]">
              <AppIcon name="briefcase" :size="17" class="mt-0.5 shrink-0" />
              <span class="grid leading-snug"><strong class="text-sm font-bold text-[var(--text)]">Available immediately</strong><small class="mt-1 text-xs">No notice period</small></span>
            </div>
          </div>
        </div>

        <!-- AI extraction illustration -->
        <div class="relative grid place-items-center" aria-label="Illustration of the Bill of Lading AI extraction flow">
          <div class="absolute left-[-4rem] top-4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(82,230,216,.18),rgba(82,230,216,0)_70%)]"></div>
          <div class="absolute bottom-0 right-[-3rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.16),rgba(139,92,246,0)_70%)]"></div>

          <div class="relative z-10 w-full max-w-[480px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-white/[0.94] shadow-[var(--shadow-soft)] backdrop-blur-xl theme-dark:bg-[linear-gradient(145deg,rgba(18,29,50,.96),rgba(10,17,31,.94))]">
            <div class="flex items-center justify-between gap-3 border-b border-[var(--border)] px-5 py-3.5">
              <span class="flex min-w-0 items-center gap-2.5">
                <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[rgba(15,118,110,.10)] text-[var(--accent)]"><AppIcon name="sparkles" :size="16" /></span>
                <span class="grid min-w-0 leading-tight"><strong class="truncate text-sm text-[var(--text)]">bill-of-lading.pdf</strong><small class="text-[0.7rem] text-[var(--muted-2)]">Read by OpenAI · strict JSON schema</small></span>
              </span>
              <span class="shrink-0 rounded-full bg-[rgba(22,128,61,.10)] px-2.5 py-1 text-[0.68rem] font-bold text-[var(--success)]">Extracted</span>
            </div>

            <dl class="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-5 text-sm">
              <div><dt class="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted-2)]">BL number</dt><dd class="mt-0.5 font-mono text-[0.82rem] text-[var(--text)]">SMPL-240117</dd></div>
              <div><dt class="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted-2)]">Vessel</dt><dd class="mt-0.5 text-[0.82rem] text-[var(--text)]">Sample Voyage 12</dd></div>
              <div><dt class="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted-2)]">ETD → ETA</dt><dd class="mt-0.5 text-[0.82rem] text-[var(--text)]">Yokohama → Southampton</dd></div>
              <div><dt class="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted-2)]">Chassis found</dt><dd class="mt-0.5 text-[0.82rem] text-[var(--text)]">6 vehicles</dd></div>
            </dl>

            <div class="grid gap-2 border-t border-[var(--border)] px-5 py-4 text-[0.8rem]">
              <p class="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--muted-2)]">Matched to existing vehicles</p>
              <span class="flex items-center justify-between rounded-lg bg-[var(--surface-2)] px-3 py-2"><span class="flex items-center gap-2 text-[var(--text)]"><AppIcon name="check" :size="15" class="text-[var(--success)]" />4 matched by chassis</span><small class="text-[var(--muted-2)]">ready</small></span>
              <span class="flex items-center justify-between rounded-lg bg-[var(--surface-2)] px-3 py-2"><span class="flex items-center gap-2 text-[var(--text)]"><AppIcon name="arrow-up-right" :size="15" class="text-[var(--accent)]" />1 not in system yet</span><small class="text-[var(--muted-2)]">review</small></span>
              <span class="flex items-center justify-between rounded-lg border border-[rgba(184,92,0,.25)] bg-[rgba(245,184,102,.10)] px-3 py-2"><span class="flex items-center gap-2 text-[var(--text)]"><AppIcon name="x" :size="15" class="text-[var(--accent-3)]" />1 conflict: already on another BL</span><small class="text-[var(--muted-2)]">flagged</small></span>
            </div>

            <div class="flex items-center justify-between gap-3 border-t border-[var(--border)] px-5 py-3.5">
              <small class="text-[0.7rem] text-[var(--muted-2)]">Illustration · sample data</small>
              <span class="rounded-lg bg-[#101828] px-3 py-1.5 text-[0.72rem] font-bold text-white theme-dark:bg-[var(--accent)] theme-dark:text-[#071015]">Confirm &amp; save</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-12 w-[min(calc(100%-2rem),1180px)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 shadow-[var(--shadow-card)] sm:w-[min(calc(100%-2.5rem),1180px)] lg:mt-8">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
          <span class="min-w-max text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[var(--muted-2)]">Core stack</span>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in coreStack" :key="tech" class="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Work -->
    <section id="work" class="border-y border-[var(--border)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto w-[min(calc(100%-2rem),1180px)] sm:w-[min(calc(100%-2.5rem),1180px)]">
        <SectionHeading eyebrow="Selected work" title="Three products I built or led." description="Screens use demo data. The crypto exchange is confidential employer work, so its case study focuses on architecture and decisions instead." />

        <div class="grid gap-5 lg:grid-cols-2">
          <NuxtLink v-for="(project, index) in featuredProjects" :key="project.slug" :to="`/work/${project.slug}`" :style="projectAccent(project)" class="group overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--project-accent)] hover:shadow-[var(--shadow-soft)]" :class="index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_.9fr]' : ''">
            <div class="relative min-h-[250px] overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(circle_at_75%_25%,color-mix(in_srgb,var(--project-accent)_16%,transparent),transparent_35%),linear-gradient(145deg,var(--surface-2),var(--bg-soft))] p-5 sm:p-7" :class="index === 0 ? 'lg:min-h-[410px] lg:border-b-0 lg:border-r' : ''">
              <img v-if="project.image" :src="project.image" :alt="project.imageAlt ?? project.title" loading="lazy" class="absolute inset-x-10 bottom-0 top-10 h-[calc(100%-2.5rem)] w-[calc(100%-5rem)] rounded-t-2xl border border-[var(--border)] object-cover object-top shadow-2xl shadow-black/20 transition duration-300 group-hover:-translate-y-1">
              <div v-else class="absolute inset-x-10 bottom-0 top-10 rounded-t-2xl border border-[var(--border)] bg-[var(--bg)]/90 shadow-2xl shadow-black/20 transition duration-300 group-hover:-translate-y-1 min-[520px]:inset-x-14 lg:inset-x-12" aria-hidden="true">
                <div class="flex h-9 items-center gap-1.5 border-b border-[var(--border)] px-3"><span class="h-1.5 w-1.5 rounded-full bg-[#ff6b6b]"></span><span class="h-1.5 w-1.5 rounded-full bg-[#ffd166]"></span><span class="h-1.5 w-1.5 rounded-full bg-[#6ee7a8]"></span></div>

                <div v-if="project.slug === 'japan-uk-vehicle-exporter'" class="flex h-[calc(100%-2.25rem)]">
                  <aside class="w-[22%] border-r border-[var(--border)] bg-[var(--surface)] p-3"><div class="mb-5 h-3 w-3/4 rounded-full bg-[var(--project-accent)]/60"></div><div class="grid gap-2"><span v-for="i in 6" :key="i" class="h-2 rounded bg-[var(--surface-3)]"></span></div></aside>
                  <main class="flex-1 p-4"><div class="h-3 w-2/5 rounded bg-[var(--text)]/20"></div><div class="mt-4 grid grid-cols-3 gap-2"><i v-for="i in 3" :key="i" class="h-11 rounded-lg border border-[var(--border)] bg-[var(--surface)]"></i></div><div class="mt-4 grid gap-2"><b v-for="i in 5" :key="i" class="h-5 rounded border border-[var(--border)] bg-[var(--surface-2)]"></b></div></main>
                </div>

                <div v-else-if="project.slug === 'munshi-wala'" class="h-[calc(100%-2.25rem)] p-5"><div class="flex justify-between"><i class="h-3 w-24 rounded bg-[var(--text)]/20"></i><i class="h-6 w-16 rounded-lg bg-[var(--project-accent)]/30"></i></div><div class="mt-5 h-16 rounded-xl border border-[var(--border)] bg-[linear-gradient(110deg,color-mix(in_srgb,var(--project-accent)_15%,transparent),var(--surface))]"></div><div class="mt-4 grid gap-2"><span v-for="i in 4" :key="i" class="h-7 rounded-lg border border-[var(--border)] bg-[var(--surface-2)]"></span></div></div>

                <div v-else class="grid h-[calc(100%-2.25rem)] grid-cols-[1fr_34%] gap-3 p-4"><div class="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"><div class="absolute inset-x-3 bottom-8 h-px rotate-[-8deg] bg-[var(--project-accent)] shadow-[0_0_18px_var(--project-accent)]"></div><div class="absolute inset-x-3 top-1/3 h-px rotate-[12deg] bg-[var(--project-accent)]/50"></div></div><div class="grid content-start gap-2"><span v-for="i in 7" :key="i" class="h-4 rounded bg-[var(--surface-2)]" :class="i % 2 ? 'w-full' : 'w-4/5'"></span></div></div>
              </div>
            </div>

            <div class="p-6 sm:p-7 lg:p-8">
              <p class="text-xs font-extrabold uppercase tracking-[0.13em] text-[var(--muted-2)]">{{ project.kicker }}<span v-if="project.confidential"> · Confidential</span></p>
              <h3 class="mt-3 text-2xl font-[780] tracking-[-0.032em] text-[var(--text)] sm:text-[1.75rem]">{{ project.title }}</h3>
              <p class="mt-3.5 text-sm leading-7 text-[var(--muted)] sm:text-[0.96rem]">{{ project.summary }}</p>
              <strong class="mt-5 block text-sm font-bold leading-6 text-[var(--text)]">{{ project.result }}</strong>
              <div class="mt-5 flex flex-wrap gap-2"><span v-for="tech in project.stack" :key="tech" class="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1.5 text-[0.72rem] font-semibold text-[var(--muted)]">{{ tech }}</span></div>
              <span class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--text)] transition group-hover:text-[var(--accent)]">Read the case study <AppIcon name="arrow-up-right" :size="17" /></span>
            </div>
          </NuxtLink>
        </div>

        <div v-if="moreProjects.length" class="mt-10">
          <p class="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted-2)]">More work</p>
          <div class="grid gap-3">
            <NuxtLink v-for="project in moreProjects" :key="project.slug" :to="`/work/${project.slug}`" class="group flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--border-strong)] sm:flex-row sm:items-center sm:p-6">
              <img v-if="project.image" :src="project.image" :alt="project.imageAlt ?? project.title" loading="lazy" class="aspect-[16/10] w-full rounded-xl border border-[var(--border)] object-cover object-top sm:w-56">
              <div class="flex-1">
                <p class="text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted-2)]">{{ project.kicker }}</p>
                <h3 class="mt-1 text-lg font-black text-[var(--text)]">{{ project.title }}</h3>
                <p class="mt-1 text-sm leading-6 text-[var(--muted)]">{{ project.result }}</p>
              </div>
              <span class="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-[var(--text)] transition group-hover:text-[var(--accent)]">Case study <AppIcon name="arrow-up-right" :size="16" /></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- AI in production -->
    <section id="ai" class="py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto w-[min(calc(100%-2rem),1180px)] sm:w-[min(calc(100%-2.5rem),1180px)]">
        <SectionHeading eyebrow="AI in production" title="OpenAI document extraction, built like the rest of a finance system." description="In the Japan–UK exporter platform, staff upload auction sheets and Bills of Lading instead of typing them in. The AI part is small; most of the work is making it safe, cheap and auditable." />
        <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="(item, index) in aiPipeline" :key="item.step" class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] sm:p-6">
            <span class="flex items-center gap-3">
              <span class="grid h-8 w-8 place-items-center rounded-lg bg-[rgba(15,118,110,.10)] text-xs font-black text-[var(--accent)]">{{ index + 1 }}</span>
              <h3 class="text-base font-black text-[var(--text)]">{{ item.step }}</h3>
            </span>
            <p class="mt-3 text-sm leading-6 text-[var(--muted)]">{{ item.text }}</p>
          </li>
        </ol>
        <NuxtLink to="/work/japan-uk-vehicle-exporter" class="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--text)] transition hover:text-[var(--accent)]">Read the full case study <AppIcon name="arrow-up-right" :size="17" /></NuxtLink>
      </div>
    </section>

    <!-- How I work -->
    <section id="about" class="border-y border-[var(--border)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto grid w-[min(calc(100%-2rem),1180px)] gap-12 sm:w-[min(calc(100%-2.5rem),1180px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="How I work" title="Habits that show up in the code." />
          <p class="text-base leading-8 text-[var(--muted)]">Most of my work is business software where a wrong number or a leaked record is a real problem: accounting, finance, procurement and trading. I start from the business rules, model the data carefully, and put tests on the parts that are expensive to get wrong.</p>
          <div class="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
            <div v-for="metric in metrics" :key="metric.t" class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]">
              <strong class="block text-3xl font-black tracking-[-0.05em] text-[var(--accent)]">{{ metric.n }}</strong><span class="mt-2 block text-xs leading-5 text-[var(--muted)] sm:text-sm">{{ metric.t }}</span>
            </div>
          </div>
        </div>
        <div class="grid content-start gap-3 sm:grid-cols-2 sm:gap-4">
          <article v-for="principle in principles" :key="principle.title" class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-[rgba(15,118,110,.10)] text-[var(--accent)]"><AppIcon :name="principle.icon" :size="21" /></span>
            <h3 class="mt-4 text-base font-black text-[var(--text)]">{{ principle.title }}</h3><p class="mt-2 text-sm leading-6 text-[var(--muted)]">{{ principle.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto w-[min(calc(100%-2rem),1180px)] sm:w-[min(calc(100%-2.5rem),1180px)]">
        <SectionHeading eyebrow="Experience" title="Six years, three of them leading teams." />
        <div class="relative">
          <div class="absolute bottom-0 left-[7px] top-0 w-px bg-[var(--border)] sm:left-[152px]"></div>
          <article v-for="item in experience" :key="item.role + item.company" class="relative grid gap-4 pb-10 pl-8 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-12 sm:pl-0">
            <div class="text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted-2)] sm:pt-1 sm:text-right">{{ item.period }}</div>
            <span class="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[4px] border-[var(--bg)] bg-[var(--accent)] shadow-[0_0_0_1px_var(--border)] sm:left-[145px]"></span>
            <div class="sm:col-start-2">
              <h3 class="text-xl font-black tracking-[-0.025em] text-[var(--text)]">{{ item.role }}</h3>
              <p class="mt-1 text-sm font-bold text-[var(--accent)]">{{ item.company }}</p>
              <p class="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{{ item.summary }}</p>
              <div class="mt-4 grid gap-2"><span v-for="point in item.points" :key="point" class="flex items-start gap-2 text-sm leading-6 text-[var(--muted)]"><AppIcon name="check" :size="15" class="mt-1 shrink-0 text-[var(--success)]" />{{ point }}</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Testimonials (hidden until filled in data/portfolio.ts) -->
    <section v-if="testimonials.length" id="recommendations" class="border-t border-[var(--border)] py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto w-[min(calc(100%-2rem),1180px)] sm:w-[min(calc(100%-2.5rem),1180px)]">
        <SectionHeading eyebrow="Recommendations" :title="testimonials.length > 1 ? 'What teammates say.' : 'From a teammate.'" />
        <div class="grid gap-4" :class="testimonials.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl'">
          <figure v-for="item in testimonials" :key="item.name" class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-7">
            <blockquote class="text-[0.98rem] leading-8 text-[var(--text)]">“{{ item.quote }}”</blockquote>
            <figcaption class="mt-5 border-t border-[var(--border)] pt-4 text-sm">
              <strong class="block font-black text-[var(--text)]">{{ item.name }}</strong>
              <span class="text-[var(--muted)]">{{ item.title }} · {{ item.relationship }}</span>
            </figcaption>
          </figure>
        </div>
        <a :href="`${profile.linkedin}/details/recommendations/`" target="_blank" rel="noreferrer" class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--text)] transition hover:text-[var(--accent)]">See them on LinkedIn <AppIcon name="arrow-up-right" :size="16" /></a>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="border-y border-[var(--border)] bg-[linear-gradient(180deg,var(--bg-soft),var(--bg))] py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto w-[min(calc(100%-2rem),1180px)] sm:w-[min(calc(100%-2.5rem),1180px)]">
        <SectionHeading eyebrow="Skills" title="Tools I use in production." />
        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article v-for="group in skillGroups" :key="group.title" class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] sm:p-6">
            <h3 class="text-base font-black tracking-[-0.02em] text-[var(--text)]">{{ group.title }}</h3>
            <div class="mt-4 flex flex-wrap gap-2"><span v-for="skill in group.skills" :key="skill" class="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1.5 text-xs font-semibold text-[var(--muted)]">{{ skill }}</span></div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-[4.5rem] sm:py-[5.5rem] lg:py-24">
      <div class="mx-auto w-[min(calc(100%-2rem),1180px)] sm:w-[min(calc(100%-2.5rem),1180px)]">
        <div class="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),var(--surface-2))] p-6 shadow-[var(--shadow-soft)] sm:p-9 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:p-12">
          <div class="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(82,230,216,.15),transparent_68%)]"></div>
          <div class="relative max-w-3xl">
            <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">Contact</p>
            <h2 class="text-[clamp(2rem,3.8vw,3rem)] font-[800] leading-[1.1] tracking-[-0.04em]">Hiring a Laravel or Vue/Nuxt developer?</h2>
            <p class="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">I’m available now for full-time or contract roles, either remote or with relocation and visa sponsorship. I’m in Pakistan ({{ profile.timezone }}) and can work hours that overlap with UK/EU or US teams. Email is the fastest way to reach me.</p>
            <button type="button" class="mt-5 inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 font-mono text-sm text-[var(--text)] transition hover:border-[var(--border-strong)]" :aria-label="`Copy email address ${profile.email}`" @click="copyEmail">
              {{ profile.email }}
              <span class="font-sans text-xs font-bold text-[var(--accent)]" aria-live="polite">{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
          </div>
          <div class="relative mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-0 lg:flex-col lg:items-stretch">
            <a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] bg-[#101828] px-5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(15,23,42,.14)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d2939] theme-dark:bg-[var(--accent)] theme-dark:text-[#071015] theme-dark:hover:bg-[#70e5dc]" :href="`mailto:${profile.email}`"><AppIcon name="mail" :size="18" /> Email me</a>
            <a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-extrabold text-[var(--text)] transition hover:border-[var(--border-strong)]" :href="profile.linkedin" target="_blank" rel="noreferrer"><AppIcon name="linkedin" :size="18" /> LinkedIn</a>
            <a class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[13px] border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-extrabold text-[var(--text)] transition hover:border-[var(--border-strong)]" :href="profile.resumePdf" download><AppIcon name="download" :size="18" /> Resume (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
