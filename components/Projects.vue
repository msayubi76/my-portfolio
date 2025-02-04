<template>
    <section class="py-4 bg-dark projects-section">
        <h4 class="text-primary text-center">
            <u>Projects</u>
        </h4>
        <h3 class="text-center">Projects I've Worked On </h3>

        <div class="d-flex flex-row overflow-auto scroll-container" ref="scrollContainer" @mousedown="startDrag"
            @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
            <!-- <div class="d-flex flex-r flex-grow-1 overflow-auto"> -->
            <div v-for="(project, index) in projects" :key="index" style="min-width: 358px;" class="me-4">
                <div class="py-3 px-2 pb-1 bg-black rounded-3">
                    <NuxtLink :href="project.link" class="text-decoration-none">
                        <p class="text-light text-opacity-75">
                            {{ project.description }}
                        </p>

                        <img :src="project.image" class="img-fluid" />
                    </NuxtLink>
                    <h4 class="font-bold text-light text-center py-3">{{ project.name }}</h4>
                </div>
            </div>
            <!-- </div> -->
        </div>


        <!-- <ClientOnly>
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


        </ClientOnly> -->


    </section>

</template>

<script setup>
const projects = [
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
        name: 'E-Procurement',
        image: './images/project.png',
        link: '/projects/e-procurement',
        description: "Developed an E-Procurement Platform using Laravel and Vue.js. Key features include quotation management, vendor analysis, purchase order generation, and a built-in messaging system for seamless communication."
    },
    {
        name: 'Jdm Trading',
        image: './images/project.png',
        link: '/projects/jdm-trading',
        description: "A car stock management platform built with Laravel, jQuery, and Bootstrap 5. Features include stock status labels, an admin panel for managing inventory, expenses, sales, and dynamic content."
    },
    {
        name: 'School Management',
        image: './images/school-management.png',
        link: '/projects/school-management',
        description: "Developed a School Management System with Laravel, jQuery & Bootstrap. Features: staff & student registration, academics, fee management, admissions, expenses, and certificate generation."
    }];

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

// Create 10 slides


// Dynamically generate links for each project
const router = useRouter();
// projects.forEach((project) => {
//     project.link = router.resolve(`/${project.slug}`).href;
// });

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



</script>