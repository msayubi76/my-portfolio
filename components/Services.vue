<template>
    <section class="bg-dark px-3 py-4">
        <h4 class="text-primary text-center">
            <u>Services</u>
        </h4>
        <h3 class="text-center">What I Do?</h3>
        <div class="d-flex flex-row overflow-auto scroll-container" ref="scrollContainer" @mousedown="startDrag"
            @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
            <div class="text-center" style="min-width: 358px;">
                <img src="/images/vuejs.png" alt="" height="70px">
                <h4 class="mt-4">VueJs/NuxtJs</h4>
                <p class="text-light text-opacity-75">Advanced proficiency in building dynamic web applications using
                    Vue.js and Nuxt.js.</p>
            </div>
            <div class="text-center" style="min-width: 358px;">
                <div class="position-relative">
                    <div class="bg-black p-3 laravel-box">
                        <img src="/images/laravel.png" alt="" height="70px">
                        <h4 class="mt-4">Laravel (PHP)</h4>
                        <p class="text-light text-opacity-75">Extensive experience with the Laravel framework for
                            building scalable web applications.</p>
                    </div>
                    <div class="laravel-triangle">

                    </div>
                </div>
            </div>
            <div class="text-center" style="min-width: 358px;">
                <img src="/images/aws.png" alt="" height="70px">
                <h4 class="mt-4">AWS</h4>
                <p class="text-light text-opacity-75">Strong knowledge of AWS services (EC2, S3, Rout53, Aws-Amplify
                    etc.), with ongoing learning and implementation.</p>
            </div>
        </div>

    </section>
</template>

<script setup>

// Dragging Logic
const scrollContainer = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const startDrag = (e) => {
    isDragging.value = true;
    startX.value = e.pageX - scrollContainer.value.offsetLeft;
    scrollLeft.value = scrollContainer.value.scrollLeft;
    scrollContainer.value.style.cursor = 'grabbing';
};

const onDrag = (e) => {
    if (!isDragging.value) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.value.offsetLeft;
    const walk = (x - startX.value) * 2; // Adjust sensitivity
    scrollContainer.value.scrollLeft = scrollLeft.value - walk;
};

const stopDrag = () => {
    isDragging.value = false;
    scrollContainer.value.style.cursor = 'grab';
};

</script>