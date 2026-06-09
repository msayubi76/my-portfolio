<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'nuxt/app'

const route = useRoute()
const activeHash = ref('')

const updateActiveHash = () => { activeHash.value = window.location.hash }
watch(() => route.fullPath, updateActiveHash)
onMounted(() => {
    updateActiveHash()
    window.addEventListener('hashchange', updateActiveHash)
})
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-inner">

            <!-- Mobile toggler — ms-auto pushes it to the right when no brand -->
            <button class="navbar-toggler ms-auto" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarMain"
                aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links + CTA (both desktop and mobile CV live here) -->
            <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav mx-auto gap-1 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" :class="{ active: activeHash === '#top-section' || activeHash === '' }" href="/#top-section">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" :class="{ active: activeHash === '#about-section' }" href="/#about-section">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" :class="{ active: activeHash === '#services-section' }" href="/#services-section">Services</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" :class="{ active: activeHash === '#skills-section' }" href="/#skills-section">Skills</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" :class="{ active: activeHash === '#projects-section' }" href="/#projects-section">Projects</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" :class="{ active: activeHash === '#contact-section' }" href="/#contact-section">Contact</NuxtLink>
                    </li>
                </ul>

                <!-- Desktop CV -->
                <a href="/images/full-stack-web-developer-salah-ud-din-cv.pdf" download target="_blank" class="btn-cv d-none d-lg-inline-flex">
                    Download CV
                    <img src="/images/download.svg" alt="" height="14">
                </a>

                <!-- Mobile CV — inside the collapse menu with top spacing -->
                <div class="d-lg-none pt-2 pb-1 border-top mt-1">
                    <a href="/images/full-stack-web-developer-salah-ud-din-cv.pdf" download target="_blank" class="btn-cv w-100 justify-content-center">
                        Download CV
                        <img src="/images/download.svg" alt="" height="14">
                    </a>
                </div>
            </div>

        </div>
    </nav>
</template>
