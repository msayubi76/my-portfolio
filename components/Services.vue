<template>
    <section class="bg-dark px-3 py-4">
        <h4 class="text-primary text-center">
            <u>Services</u>
        </h4>
        <h3 class="text-center">What I Do?</h3>
        <div class="">
            <swiper-container ref="containerRef">
                <swiper-slide>
                    <div class="text-center" style="min-width: 358px;">
                        <img src="/images/vuejs.png" alt="" height="70px">
                        <h4 class="mt-4">VueJs/NuxtJs</h4>
                        <p class="text-light text-opacity-75">Advanced proficiency in building dynamic web applications
                            using
                            Vue.js and Nuxt.js.</p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="text-center " style="min-width: 358px;">
                        <div class="position-relative mx-auto" style="width: fit-content;">
                            <div class="bg-black p-3 laravel-box">
                                <img src="/images/laravel.png" alt="" height="70px">
                                <h4 class="mt-4">Laravel (PHP)</h4>
                                <p class="text-light text-opacity-75">Extensive experience with the Laravel framework
                                    for
                                    building scalable web applications.</p>
                            </div>
                            <div class="laravel-triangle">

                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="text-center" style="min-width: 358px;">
                        <img src="/images/aws.png" alt="" height="70px">
                        <h4 class="mt-4">AWS</h4>
                        <p class="text-light text-opacity-75">Strong knowledge of AWS services (EC2, S3, Rout53,
                            Aws-Amplify
                            etc.), with ongoing learning and implementation.</p>
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