<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
    if (typeof window !== 'undefined') {
        console.log("Scroll position:", window.scrollY); // Debugging
        showButton.value = window.scrollY > 200;
    }
};

const scrollToTop = () => {
    if (typeof window !== 'undefined') {
        console.log("Scrolling to top"); // Debugging
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

onMounted(() => {
    if (typeof window !== 'undefined') {
        console.log("Scroll event listener added"); // Debugging
        window.addEventListener("scroll", handleScroll);
    }
});

onUnmounted(() => {
    if (typeof window !== 'undefined') {
        console.log("Scroll event listener removed"); // Debugging
        window.removeEventListener("scroll", handleScroll);
    }
});
</script>

<template>
    <button v-if="showButton" @click="scrollToTop">
        Scroll to Top
    </button>
</template>