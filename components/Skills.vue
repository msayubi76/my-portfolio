<template>
    <section class="py-5">
        <div class="text-center mb-5">
            <div class="section-label justify-content-center">Technical Expertise</div>
            <h2 class="section-title">Skills &amp; Technologies</h2>
            <p class="section-subtitle mx-auto mt-2" style="color:#6B7280;">
                Tools and technologies I use to build robust, scalable applications.
            </p>
        </div>

        <div class="row g-3">
            <div class="col-lg-2 col-md-3 col-sm-4 col-6" v-for="(skill, index) in skills" :key="index">
                <div class="skill-badge">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-category">{{ skill.category }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = ref([
    { name: 'Vue.js / Nuxt.js', category: 'Frontend' },
    { name: 'Laravel / PHP',    category: 'Backend' },
    { name: 'RESTful APIs',     category: 'API Dev' },
    { name: 'MySQL',            category: 'Database' },
    { name: 'AWS',              category: 'Cloud' },
    { name: 'Git',              category: 'Version Control' },
    { name: 'Bootstrap / SCSS', category: 'UI Styling' },
    { name: 'jQuery',           category: 'JavaScript' },
    { name: 'Pusher / Echo',    category: 'Real-time' },
    { name: 'Linux / Shell',    category: 'DevOps' },
    { name: 'Inertia.js',       category: 'Full-Stack' },
    { name: 'Pinia / Vuex',     category: 'State Mgmt' },
])
</script>
