<template>
    <div class="gallery-container d-flex align-items-center justify-content-center row" id="gallery-container">
        

            <div class="col-md-3 gallery-item" v-for="(image, index) in images" :key="index" :data-src="image.src">
                <div   >
                    <img :src="image.src" class="img-fluid" />
                </div>
            </div>
        

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
        });
    }
});

</script>