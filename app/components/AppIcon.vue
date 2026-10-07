<script setup lang="ts">
type IconName = 'arrow-up-right' | 'arrow-right' | 'briefcase' | 'check' | 'code' | 'download' | 'github' | 'globe' | 'linkedin' | 'mail' | 'map-pin' | 'menu' | 'moon' | 'server' | 'sparkles' | 'sun' | 'users' | 'x'

const props = withDefaults(defineProps<{
  name: IconName
  size?: number
}>(), { size: 20 })

const paths: Record<IconName, string[]> = {
  'arrow-up-right': ['M7 17 17 7', 'M7 7h10v10'],
  'arrow-right': ['M5 12h14', 'm13 6 6 6-6 6'],
  briefcase: ['M9 6V4h6v2', 'M4 6h16a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z', 'M3 11h18'],
  check: ['m5 12 4 4L19 6'],
  code: ['m8 9-3 3 3 3', 'm16 9 3 3-3 3', 'm14 5-4 14'],
  download: ['M12 3v12', 'm7 10 5 5 5-5', 'M5 21h14'],
  github: ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-6 0C5.8.1 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.5 6.8 7A4.8 4.8 0 0 0 9 18v4', 'M9 18c-4.5 2-5-2-7-2'],
  globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z'],
  linkedin: ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z', 'M2 9h4v12H2z', 'M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'm22 6-10 7L2 6'],
  'map-pin': ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z', 'M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  moon: ['M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z'],
  server: ['M4 3h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z', 'M4 13h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z', 'M6 7h.01', 'M6 17h.01'],
  sparkles: ['m12 3-1.5 3.5L7 8l3.5 1.5L12 13l1.5-3.5L17 8l-3.5-1.5Z', 'm5 14-.8 1.8L2.5 17l1.7.8L5 20l.8-2.2 1.7-.8-1.7-1.2Z', 'm19 14-.8 1.8-1.7 1.2 1.7.8L19 20l.8-2.2 1.7-.8-1.7-1.2Z'],
  sun: ['M12 4V2', 'M12 22v-2', 'm4.93 4.93-1.42-1.42', 'm18.49 18.49-1.42-1.42', 'M4 12H2', 'M22 12h-2', 'm6.93 17.07-1.42 1.42', 'm18.49 5.51-1.42 1.42', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'],
  users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  x: ['M18 6 6 18', 'M6 6l12 12']
}
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path v-for="path in paths[name]" :key="path" :d="path" />
  </svg>
</template>
