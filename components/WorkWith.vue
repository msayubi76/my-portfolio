<template>
    <section class="py-4 mt-4" id="work-with">
        <div class="text-center mb-4">
            <div class="section-label justify-content-center">Experience</div>
            <h2 class="section-title" style="font-size:1.6rem;">Companies I've Worked With</h2>
        </div>

        <div class="companies-grid">
            <div class="company-card" v-for="(company, index) in companiess" :key="index">
                <div class="company-logo-wrap" :style="company.logoBg ? { background: company.logoBg } : {}">
                    <img :src="company.image" :alt="company.name" class="company-logo" />
                </div>
                <span class="company-name">{{ company.name }}</span>
            </div>
        </div>
    </section>
</template>

<script setup>
const companiess = ref([
    { name: 'Digital Code',     image: './images/digital-code.svg', logoBg: '#1E293B' },
    { name: 'Signup Solution', image: './images/signup-solution.svg' },
    { name: 'Procurosis',      image: './images/procurosis.png'      },
    { name: 'Global Gateway',  image: './images/ggateway.png'        },
])

</script>

<style scoped>
.companies-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.company-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 10px;
    padding: 0.875rem 1.1rem;
    transition: border-color 200ms ease, box-shadow 200ms ease;
}

.company-card:hover {
    border-color: rgba(16, 185, 129, 0.35);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
}

.company-logo-wrap {
    width: 56px;
    height: 40px;
    flex-shrink: 0;
    background: #F1F5F9;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    transition: background 200ms ease;
}

.company-card:hover .company-logo-wrap {
    background: #E2F5EE;
}

.company-logo {
    max-height: 32px;
    max-width: 48px;
    width: auto;
    object-fit: contain;
    filter: grayscale(70%);
    transition: filter 200ms ease;
}

.company-card:hover .company-logo {
    filter: grayscale(0%);
}

.company-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    line-height: 1.3;
}

@media (max-width: 480px) {
    .companies-grid {
        grid-template-columns: 1fr;
    }
}
</style>
