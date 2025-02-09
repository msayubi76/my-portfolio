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
            speed: 500,
            controls: true,
            thumbnail: true,
            zoom: true,
            selector: "a",

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

</script>