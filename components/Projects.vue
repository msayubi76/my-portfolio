<template>
    <section class="py-4 bg-dark projects-section">
        <h3 class="text-primary text-center">
            <u>Projects</u>
        </h3>
        <h2 class="text-center">Projects I've Worked On </h2>


        <ClientOnly>
            <swiper-container ref="containerRef">
                <swiper-slide v-for="(project, index) in projects" :key="index">
                    <!-- <img :src="project.image" class="img-fluid" /> -->
                    <NuxtImg :src="project.image" class="img-fluid" />

                    <h4 class="font-bold text-light">{{ project.name }}</h4>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
        <!-- <div class="row mt-5">
            <div class="col-4 mb-3" v-for="(project, index) in projects" :key="index">
                <img :src="project.image" class="img-fluid" />
                <h4 class="font-bold text-light">{{ project.name }}</h4>
            </div>
        </div> -->
    </section>

</template>

<script setup lang="ts">


const projects = ref([
    {
        name: 'VueJs/NuxtJs',
        image: './images/project.png'
    },
    {
        name: 'Laravel',
        image: './images/project.png'
    },
    {
        name: 'Aws',
        image: './images/project.png'
    },
    {
        name: 'MySql',
        image: './images/project.png'
    },
    {
        name: 'Git',
        image: './images/project.png'
    },
    {
        name: 'JQuery',
        image: './images/project.png'
    },
    {
        name: 'Linux-Shell',
        image: './images/project.png'
    },
    {
        name: 'Restfull Api',
        image: './images/project.png'
    },
    {
        name: 'Bootstrap',
        image: './images/project.png'
    },
    {
        name: 'Scss',
        image: './images/project.png'
    },
    {
        name: 'Sass',
        image: './images/project.png'
    },
])


// Create 10 slides
const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    effect: 'creative',
    loop: true,
    autoplay: {
        delay: 1000,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: true,
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            shadow: true,
            translate: [0, 0, -400],
        },
    },
})

onMounted(() => {
    // Access Swiper instance
    // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
    console.log(swiper.instance)
})

</script>