<template>

    <div style="width: 100px; text-align: center;">
        <div class="progress-bar bg-dark" :data-progress="progress" :style="`background:
        radial-gradient(closest-side, #222222 79%, transparent 80% 100%),
        conic-gradient(${color} ${progress}%, white 0)`">
            <span class="text-opacity-75 text-light">{{ progress }}%</span>
        </div>
        <div class="text-light">
            <b>{{ text }}</b>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
    progress: {
        type: Number,
        required: true
    },
    text: {
        type: String
    },
    color: {
        type: String
    }
});

const circleStyle = computed(() => {
    // Dynamically set --progress using the progress value
    return {
        '--progress': `${props.progress}%`, // This binds the custom property to the progress value
    };
});
</script>

<style scoped>
.progress-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>