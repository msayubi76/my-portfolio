<script setup>
const images = ref([])

const config = useRuntimeConfig();

for (let index = 0; index < 5; index++) {

    images.value.push({
        src: `${config.app.baseURL}images/procurement-${index}.png`
    })

}
</script>
<template>
    <div class="container">
        <div class="project">
            <div class="row">
                <div class="col-md-6">
                    <h2>E-Procurement Platform</h2>
                    <p><strong>Technologies Used</strong>: Laravel, Vue.js, RESTful APIs</p>

                    <h3>Project Overview</h3>
                    <p>
                        Developed a comprehensive <strong>E-Procurement Platform</strong> to streamline the procurement
                        process
                        between buyers and vendors. The platform allows buyers to create and share quotations, analyze
                        vendor
                        responses, and generate purchase orders. Vendors can respond to quotations with detailed rates,
                        discounts, taxes, and delivery terms. The system also includes a messaging feature for seamless
                        communication between buyers and vendors, along with role-based access control for employees of
                        both
                        buyers and vendors.
                    </p>
                </div>

                <div class="col-md-6"> 
                    <video src="/videos/procurement.mp4" type="video/mp4" controls width="100%"> </video>
                    <GalleryImages :images="images" />

                </div>
            </div>

            <h3>Key Features</h3>
            <ol>
                <li>
                    <strong>Quotation Management</strong>:
                    <ul>
                        <li>Buyers can create and share quotations with vendors.</li>
                        <li>Vendors can respond with rates, discounts, taxes, and delivery details.</li>
                    </ul>
                </li>
                <li>
                    <strong>Vendor Analysis</strong>:
                    <ul>
                        <li>Buyers can analyze all received RFQ responses on a single page.</li>
                        <li>System highlights the top 3 vendors with the most competitive rates.</li>
                        <li>Compare rates, discounts, taxes, and delivery terms between vendors.</li>
                        <li>Visualize data using charts for better decision-making.</li>
                    </ul>
                </li>
                <li>
                    <strong>Communication</strong>:
                    <ul>
                        <li>Buyers and vendors can communicate quotation-wise via an integrated messenger.</li>
                    </ul>
                </li>
                <li>
                    <strong>Rate List Sharing</strong>:
                    <ul>
                        <li>Vendors can share their rate lists directly with buyers.</li>
                    </ul>
                </li>
                <li>
                    <strong>Purchase Order (PO) Generation</strong>:
                    <ul>
                        <li>Buyers can send final POs to selected vendors.</li>
                    </ul>
                </li>
                <li>
                    <strong>External Vendor Support</strong>:
                    <ul>
                        <li>Buyers can send quotations to non-registered vendors via email.</li>
                        <li>Vendors can respond through a shared link without needing to register.</li>
                    </ul>
                </li>
                <li>
                    <strong>Role-Based Access Control</strong>:
                    <ul>
                        <li>Manage employees of both buyers and vendors with roles and permissions.</li>
                    </ul>
                </li>
            </ol>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>Frontend</strong>: Vue.js, Bootstrap</li>
                <li><strong>Backend</strong>: Laravel, RESTful APIs</li>
                <li><strong>Database</strong>: MySQL</li>
                <li><strong>Deployment</strong>: VPS, CPanel</li>
                <li><strong>Version Control</strong>: Git</li>
            </ul>

            <h3>Impact</h3>
            <ul>
                <li>Streamlined the procurement process for buyers and vendors.</li>
                <li>Improved decision-making with advanced vendor analysis tools.</li>
                <li>Enhanced communication and collaboration between buyers and vendors.</li>
            </ul>
        </div>
    </div>
</template>