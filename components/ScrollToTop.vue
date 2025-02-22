<script setup>
const showButton = ref(false);

// Check scroll position
const handleScroll = () => {
    showButton.value = window.scrollY > 120; // Show button after scrolling 200px
};

// Scroll to top function
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Add event listener on mount
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

// Remove event listener on unmount
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
        <img src="/images/up-arrow.svg" height="30px"/>
    </button>
</template>

<style scoped>
</style>
