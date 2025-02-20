<template>
    <div class="gallery-container d-flex align-items-center justify-content-center row" id="gallery-container">
        <swiper-container ref="containerRef">
            <swiper-slide class="gallery-item" v-for="(image, index) in images" :key="index">

                <a :href="image.src" :data-src="image.src">
                    <img :src="image.src" class="img-fluid" />
                </a>

            </swiper-slide>
        </swiper-container>



        <!-- <div class="col-md-3 gallery-item px-1 mb-2" v-for="(image, index) in images" :key="index"
            :data-src="image.src">
            <div>
                <img :src="image.src" class="img-fluid" />
            </div>
        </div> -->


    </div>
</template>
<script setup>
// import lgZoom from '/libraries/lg-zoom'
// import lightGallery from 'lightgallery';

// Plugins
import lgZoom from 'lightgallery/plugins/zoom'



const props = defineProps({
    images: {
        type: Array,
        default: Array
    }
})


onMounted(() => {


    console.log('imagesimagesimages', JSON.stringify(props.images));

    const galleryElement = document.getElementById("gallery-container");

    if (galleryElement) {
        lightGallery(galleryElement, {
            plugins: [lgZoom], // Enable the Zoom plugin
            speed: 500,
            controls: true,
            thumbnail: true,
            selector: "a",
            zoomFromOrigin: true,
            mobileSettings: {
                controls: true,
                showCloseIcon: true,
                download: true,
            }
        });
    }
});



const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    effect: 'creative',
    loop: true,
    autoplay: {
        delay: 1000,
    },
    slidesPerView: 4,
    spaceBetween: 10,
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
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        400: {
            slidesPerView: 4
        },
        // when window width is >= 1200
        1200: {
            slidesPerView: 3
        }
    },
})

</script>