<template>
    <section class="bg-dark px-3 py-4">
        <h4 class="text-primary text-center">
            <u>Services</u>
        </h4>
        <h3 class="text-center">What I Do?</h3>
        <div class="">
            <swiper-container ref="containerRef">
                <swiper-slide>
                    <div class="text-center service-slide" >
                        <img src="/images/vuejs.png" alt="Vue.js Logo" height="70">
                        <h4 class="mt-3">Vue.js / Nuxt.js</h4>
                        <p class="text-light text-opacity-75 mb-2">
                            Advanced expertise in developing dynamic web applications with Vue.js and Nuxt.js.
                        </p>
                        <p class="fw-semibold text-light text-opacity-75">
                            Vuex · Pinia · iView · Ant Design · BootstrapVue · Laravel Echo · SignalR
                        </p>
                    </div>

                </swiper-slide>
                <swiper-slide>
                    <div class="text-center service-slide" >
                        <div class="position-relative mx-auto" style="width: fit-content;">
                            <div class="bg-black p-3 laravel-box text-light">
                                <img src="/images/laravel.png" alt="Laravel Logo" height="70">
                                <h4 class="mt-4">Laravel (PHP)</h4>

                                <p class="fw-semibold text-opacity-75">
                                    <small>Broadcasting · Pusher · Notification · Queue Jobs · Inertia.js · Artisan
                                        Commands ·
                                        Task Scheduling · Seeders · Factories. etc</small>
                                </p>
                            </div>
                            <div class="laravel-triangle"></div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="text-center service-slide" >
                        <img src="/images/aws.png" alt="AWS Logo" height="70">
                        <h4 class="mt-4">AWS</h4>
                        <p class="text-light text-opacity-75 mb-2">
                            Strong knowledge of AWS services with hands-on experience in deployment and scalability.
                        </p>
                        <p class="fw-semibold text-opacity-75">
                            EC2 · S3 · Route 53 · AWS Amplify · CloudFront · RDS · IAM
                        </p>
                    </div>

                </swiper-slide>
            </swiper-container>
        </div>

    </section>
</template>

<script setup>
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
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 1200
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
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

</script>