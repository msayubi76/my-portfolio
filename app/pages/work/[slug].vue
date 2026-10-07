<script setup lang="ts">
import { profile, projects, siteUrl } from '~/data/portfolio'
import type { LightboxSlide } from '~/composables/useLightbox'

const route = useRoute()
const index = computed(() => projects.findIndex(item => item.slug === route.params.slug))
const project = computed(() => projects[index.value])
const nextProject = computed(() => projects[(index.value + 1) % projects.length])

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

// Lightbox slides: the main image (when it has known dimensions) followed by the gallery.
const heroSlide = computed<LightboxSlide | null>(() => {
  const p = project.value
  return p?.image && p.imageWidth && p.imageHeight && !p.video
    ? { src: p.image, width: p.imageWidth, height: p.imageHeight, alt: p.imageAlt ?? p.title, caption: p.imageAlt }
    : null
})
const slides = computed<LightboxSlide[]>(() => [
  ...(heroSlide.value ? [heroSlide.value] : []),
  ...(project.value?.gallery ?? [])
])
const galleryOffset = computed(() => (heroSlide.value ? 1 : 0))
const { open } = useLightbox(slides)

useSeoMeta({
  title: () => `${project.value?.title} — Case study by Salah ud Din`,
  description: () => project.value?.summary ?? '',
  ogTitle: () => `${project.value?.title} — Salah ud Din`,
  ogDescription: () => project.value?.result ?? '',
  ogImage: () => `${siteUrl}/og/${project.value?.slug}.png`
})
</script>

<template>
  <article v-if="project" class="pb-[4.5rem] pt-28 sm:pb-[5.5rem] sm:pt-32 lg:pb-24 lg:pt-36">
    <div class="mx-auto w-[min(calc(100%-2rem),980px)] sm:w-[min(calc(100%-2.5rem),980px)]">
      <NuxtLink to="/#work" class="inline-flex text-sm font-bold text-[var(--muted)] transition hover:text-[var(--text)]">← Back to selected work</NuxtLink>
      <p class="mb-3 mt-10 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{{ project.kicker }}<span v-if="project.confidential" class="text-[var(--muted-2)]"> · Confidential</span></p>
      <h1 class="max-w-4xl text-[clamp(2.4rem,6vw,4.6rem)] font-[820] leading-[1.02] tracking-[-0.05em] text-[var(--text)]">{{ project.title }}</h1>
      <p class="mt-5 max-w-3xl text-[1.03rem] leading-8 text-[var(--muted)] sm:text-[1.12rem]">{{ project.summary }}</p>
      <p class="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]"><strong class="font-black text-[var(--text)]">My role:</strong> {{ project.role }}</p>
      <div class="mt-6 flex flex-wrap gap-2"><span v-for="tech in project.stack" :key="tech" class="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">{{ tech }}</span></div>
      <div class="mt-8 flex items-start gap-3 rounded-2xl border border-[rgba(15,118,110,.22)] bg-[rgba(82,230,216,.07)] p-4 text-sm font-bold leading-6 text-[var(--text)] sm:p-5"><AppIcon name="sparkles" :size="20" class="mt-0.5 shrink-0 text-[var(--accent)]" /><span>{{ project.result }}</span></div>

      <video v-if="project.video" :src="project.video" :poster="project.image" controls preload="metadata" class="mt-10 w-full rounded-2xl border border-[var(--border)] shadow-[var(--shadow-soft)]"></video>
      <a v-else-if="heroSlide" :href="heroSlide.src" class="group relative mx-auto mt-10 block w-fit max-w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-soft)]" :aria-label="`Open image: ${heroSlide.alt}`" @click.prevent="open(0)">
        <img :src="heroSlide.src" :alt="heroSlide.alt" :width="heroSlide.width" :height="heroSlide.height" class="block h-auto w-auto max-w-full">
        <span class="pointer-events-none absolute bottom-3 right-3 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-bold text-white opacity-90 transition group-hover:opacity-100">View larger</span>
      </a>
      <img v-else-if="project.image" :src="project.image" :alt="project.imageAlt ?? project.title" class="mx-auto mt-10 block w-auto max-w-full rounded-2xl border border-[var(--border)] shadow-[var(--shadow-soft)]">
    </div>

    <div class="mx-auto mt-14 grid w-[min(calc(100%-2rem),1180px)] gap-10 sm:w-[min(calc(100%-2.5rem),1180px)] lg:grid-cols-[1fr_360px] lg:items-start lg:gap-16">
      <div class="grid gap-10 sm:gap-12">
        <section class="border-t border-[var(--border)] pt-7"><h2 class="text-2xl font-black tracking-[-0.03em] text-[var(--text)]">The problem</h2><p class="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{{ project.challenge }}</p></section>
        <section class="border-t border-[var(--border)] pt-7"><h2 class="text-2xl font-black tracking-[-0.03em] text-[var(--text)]">What I did</h2><p class="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{{ project.contribution }}</p></section>

        <section class="border-t border-[var(--border)] pt-7">
          <h2 class="text-2xl font-black tracking-[-0.03em] text-[var(--text)]">Key decisions</h2>
          <div class="mt-5 grid gap-4">
            <div v-for="(item, i) in project.decisions" :key="item.title" class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] sm:p-6">
              <h3 class="flex items-start gap-3 text-lg font-black tracking-[-0.02em] text-[var(--text)]"><span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--surface-2)] text-xs text-[var(--accent)]">{{ i + 1 }}</span>{{ item.title }}</h3>
              <dl class="mt-4 grid gap-3 text-sm leading-7">
                <div><dt class="text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--muted-2)]">Context</dt><dd class="mt-1 text-[var(--muted)]">{{ item.context }}</dd></div>
                <div><dt class="text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--muted-2)]">Decision</dt><dd class="mt-1 text-[var(--text)]">{{ item.decision }}</dd></div>
                <div><dt class="text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--muted-2)]">Tradeoff</dt><dd class="mt-1 text-[var(--muted)]">{{ item.tradeoff }}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section class="border-t border-[var(--border)] pt-7">
          <h2 class="text-2xl font-black tracking-[-0.03em] text-[var(--text)]">Highlights</h2>
          <div class="mt-5 grid gap-3"><div v-for="item in project.highlights" :key="item" class="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--muted)]"><AppIcon name="check" :size="17" class="mt-1 shrink-0 text-[var(--success)]" /><span>{{ item }}</span></div></div>
        </section>

        <section v-if="project.gallery?.length" class="border-t border-[var(--border)] pt-7">
          <h2 class="text-2xl font-black tracking-[-0.03em] text-[var(--text)]">Screens</h2>
          <p class="mt-2 text-sm text-[var(--muted)]">Demo data. Tap or click an image to view it full size; swipe or use the arrow keys to move between screens.</p>
          <div class="mt-5 grid gap-5 min-[480px]:grid-cols-2">
            <figure v-for="(shot, i) in project.gallery" :key="shot.src" class="min-w-0">
              <a :href="shot.src" class="group relative block cursor-zoom-in overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition hover:border-[var(--border-strong)] focus-visible:border-[var(--accent)]" :aria-label="`Open image ${i + 1 + galleryOffset} of ${slides.length}: ${shot.alt}`" @click.prevent="open(i + galleryOffset)">
                <img :src="shot.src" :alt="shot.alt" :width="shot.width" :height="shot.height" loading="lazy" decoding="async" class="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]">
              </a>
              <figcaption class="mt-2 text-xs leading-5 text-[var(--muted)]">{{ shot.caption }}</figcaption>
            </figure>
          </div>
        </section>
      </div>

      <aside class="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] sm:p-6 lg:sticky lg:top-28">
        <p class="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted-2)]">Architecture</p>
        <ol class="mt-5 grid gap-1">
          <li v-for="(layer, i) in project.architecture" :key="layer.layer">
            <div class="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-3">
              <p class="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">{{ layer.layer }}</p>
              <div class="mt-2 flex flex-wrap gap-1.5"><span v-for="node in layer.nodes" :key="node" class="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[0.72rem] font-semibold text-[var(--text)]">{{ node }}</span></div>
            </div>
            <div v-if="i < project.architecture.length - 1" class="grid h-5 place-items-center text-[var(--muted-2)]" aria-hidden="true">↕</div>
          </li>
        </ol>
        <div v-if="project.confidential" class="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4"><strong class="text-sm font-black text-[var(--text)]">Confidential work</strong><p class="mt-2 text-xs leading-6 text-[var(--muted)]">{{ project.image ? 'The client’s name and real data are left out. Screens show a demo workspace with fictional data, shared with the client’s permission.' : 'Company screens, names and internal data are left out. I’m happy to walk through the architecture and code decisions in an interview.' }}</p></div>
      </aside>
    </div>

    <div class="mx-auto mt-16 grid w-[min(calc(100%-2rem),1180px)] gap-4 sm:w-[min(calc(100%-2.5rem),1180px)] md:grid-cols-2">
      <div class="flex flex-col justify-between gap-5 rounded-2xl border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),var(--surface-2))] p-6 sm:p-8">
        <p class="text-lg font-black text-[var(--text)]">Want to go deeper on this project?</p>
        <a class="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-[13px] bg-[#101828] px-5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(15,23,42,.14)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d2939] theme-dark:bg-[var(--accent)] theme-dark:text-[#071015] theme-dark:hover:bg-[#70e5dc]" :href="`mailto:${profile.email}?subject=${encodeURIComponent(project.title)}`"><AppIcon name="mail" :size="18" /> Email me</a>
      </div>
      <NuxtLink v-if="nextProject && nextProject.slug !== project.slug" :to="`/work/${nextProject.slug}`" class="group flex flex-col justify-between gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--border-strong)] sm:p-8">
        <span class="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted-2)]">Next case study</span>
        <span class="flex items-center justify-between gap-4 text-lg font-black text-[var(--text)] transition group-hover:text-[var(--accent)]">{{ nextProject.title }} <AppIcon name="arrow-right" :size="20" /></span>
      </NuxtLink>
    </div>
  </article>
</template>
