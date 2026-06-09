<template>
    <div class="skill-badge">
        <span class="skill-name">{{ text }}</span>
        <span class="skill-category" v-if="progress">{{ progress }}%</span>
    </div>
</template>

<script setup>
defineProps({
    progress: { type: Number, required: false },
    text: { type: String },
    color: { type: String }
});
</script>
