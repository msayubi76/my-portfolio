<template>
    <section class="py-4 mt-4">
        <h3 class="text-primary text-center">
            <u>Worked With</u>
        </h3>
        

        <div class="row mt-5">
            <div class="col-4 mb-3" v-for="(company, index) in companiess" :key="index">
                <img  :src="company.image" height="40px" style="    filter: grayscale(93%);"/>
            </div>
        </div>
    </section>

</template>

<script setup>

const companiess = ref([
    {
        name: 'Digital Code',
        image: './images/digital-code.svg'
    },
    {
        name: 'Signup Solution',
        image: './images/signup-solution.svg'
    },
    {
        name: 'Procurosis',
        image: './images/procurosis.png'
    },
    {
        name: 'Global Gateway',
        image: './images/ggateway.png'
    },
    {
        name: 'Ikonami Technologies',
        image: './images/ikonami.webp'
    },
    {
        name: 'Zeeapp Solutions',
        image: './images/zeeapp.png'
    }
])

</script>