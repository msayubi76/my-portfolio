<template>
    <section class="py-4 bg-dark projects-section">
        <h3 class="text-primary text-center">
            <u>Projects</u>
        </h3>
        <h2 class="text-center">Projects I've Worked On </h2>


        <ClientOnly>
            <swiper-container ref="containerRef">
                <swiper-slide v-for="(project, index) in projects" :key="index">
                    <div class="py-3 px-2 pb-1 bg-black rounded-3">
                        <NuxtLink :href="project.link" class="text-decoration-none">
                            <p class="text-light text-opacity-75">
                                {{ project.description }}
                            </p>

                            <img :src="project.image" class="img-fluid" />
                        </NuxtLink>
                        <h4 class="font-bold text-light text-center py-3">{{ project.name }}</h4>
                    </div>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </section>

</template>

<script setup lang="ts">


const projects = ref([
    {
        name: 'Crypto Exchange Platform',
        image: './images/project.png',
        link: '/projects/crypto-exchange-platform',
        description: "A full-featured crypto exchange platform developed  using Nuxt.js and Ant Design. Key features include P2P trading, spot/margin/futures trading, internal transfers, and decentralized deposits/withdrawals."
    },
    {
        name: 'PlutoPakistan',
        image: './images/project.png',
        link: '/projects/pluto-pakistan',
        description: "Multivendor ecommerce platform  developed using Laravel, jQuery, and Nuxt 3. Key features include multi-payment options, return/refund processing, and a robust commission system for vendors and admin."
    },
    {
        name: 'Jdm Trading',
        image: './images/project.png',

        link: '/projects/jdm-trading',
        description: null
    },
    {
        name: 'Sign of Style',
        image: './images/project.png',

        link: '/projects/sign-of-style',
        description: null
    },
    {
        name: 'E-Procurement',
        image: './images/project.png',
        link: '/projects/e-procurement',
        description: null
    },
    {
        name: 'School Management',
        image: './images/project.png',
        link: '/projects/school-management',
        description: null
    },
    {
        name: 'Currency Exchange (Finanspan)',
        image: './images/project.png',
        link: '/projects/finanspan',
        description: null
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