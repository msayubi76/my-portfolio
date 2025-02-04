<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'nuxt/app'

const route = useRoute()
const activeHash = ref('')

// Function to update the active hash based on the current URL
const updateActiveHash = () => {
    activeHash.value = window.location.hash
}

// Watch for route changes
watch(() => route.fullPath, updateActiveHash)

// Initialize the hash on page load
onMounted(() => {
    updateActiveHash()
    window.addEventListener('hashchange', updateActiveHash)
})
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link px-3" :class="{ active: activeHash === '#top-section' }"
                            href="/#top-section">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link px-3" :class="{ active: activeHash === '#about-section' }"
                            href="/#about-section">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link px-3" :class="{ active: activeHash === '#services-section' }"
                            href="/#services-section">Services</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link px-3" :class="{ active: activeHash === '#skills-section' }"
                            href="/#skills-section">Skills</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link px-3" :class="{ active: activeHash === '#projects-section' }"
                            href="/#projects-section">Projects</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link px-3" :class="{ active: activeHash === '#contact-section' }"
                            href="/#contact-section">Contact</NuxtLink>
                    </li>
                </ul>
                <a href="/images/full-stack-web-developer-salah-ud-din-cv.pdf" download target="_blank"
                    class="btn btn-primary text-white btn-sm d-none d-md-block ">
                    Download CV
                    <img src="/images/download.svg" alt="">
                </a>
            </div>


        </div>
        <a href="/images/full-stack-web-developer-salah-ud-din-cv.pdf" download target="_blank"
            class="btn btn-primary text-white btn-sm  d-block d-lg-none position-absolute end-0 top-0 mt-2">
            Download CV
            <img src="/images/download.svg" alt="">
        </a>
    </nav>
</template>
