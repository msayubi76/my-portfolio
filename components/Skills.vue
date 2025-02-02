<template>
    <section class="py-4">
        <h4 class="text-primary text-center">
            <u>My Expertise</u>
        </h4>
        <h3 class="text-center">I'm Proficient In
        </h3>


        <div class="row mt-5">
            <div class="col-md-2 col-sm-3 col-4 mb-3" v-for="(skill, index) in skills" :key="index">
                <ProgressCircle :progress="skill.progress" :text="skill.name" />
            </div>
        </div>
    </section>

</template>

<script setup>

const skills = ref([
    {
        name: 'VueJs/NuxtJs',
        progress: 85
    },
    {
        name: 'Laravel',
        progress: 85
    },
    {
        name: 'Aws',
        progress: 40
    },
    {
        name: 'MySql',
        progress: 70
    },
    {
        name: 'Git',
        progress: 70
    },
    {
        name: 'JQuery',
        progress: 75
    },
    {
        name: 'Linux-Shell',
        progress: 35
    },
    {
        name: 'Restfull Api',
        progress: 90
    },
    {
        name: 'Bootstrap',
        progress: 90
    },
    {
        name: 'Scss',
        progress: 80
    },
    {
        name: 'Sass',
        progress: 80
    },
])

</script>