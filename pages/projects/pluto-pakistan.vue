<script setup>
const images = ref([])

const config = useRuntimeConfig();

for (let index = 1; index < 5; index++) {

    images.value.push({
        src: `${config.app.baseURL}images/plutopakistan-${index}.png`
    })

}
</script>
<template>
    <div class="container">
        <div class="project">
            <div class="row">
                <div class="col-md-6">
                    <h2>PlutoPakistan - Ecommerce Multivendor Platform</h2>
                    <p><strong>Live Link</strong>: <a href="https://plutopakistan.com" target="_blank">PlutoPakistan</a>
                    </p>
                    <p><strong>Technologies Used</strong>: Laravel, jQuery, Nuxt 3, RESTful APIs</p>

                    <h3>Project Overview</h3>
                    <p>
                        Developed <strong>PlutoPakistan</strong>, a robust multivendor ecommerce platform where
                        customers can
                        purchase products listed by registered vendors. The platform supports multiple payment options,
                        order
                        tracking, and a seamless return/refund process. The <strong>admin panel</strong> was built using
                        <strong>Laravel</strong> and <strong>jQuery</strong>, while the <strong>frontend
                            website</strong> was
                        developed using <strong>Nuxt 3</strong> for a fast and responsive user experience.
                    </p>
                </div>
                <div class="col-md-6">
                    <!-- <video src="/videos/school-management-system.mp4" controls width="100%"> </video> -->
                    <GalleryImages :images="images" />

                </div>
            </div>

            <h3>Key Features and Modules</h3>
            <ol>
                <li>
                    <strong>Customer Features</strong>:
                    <ul>
                        <li>Browse and purchase products from multiple vendors.</li>
                        <li>Checkout with three payment options: Cash on Delivery, Online Payment, and Pluto Wallet.
                        </li>
                        <li>View order details, wallet transactions, and return/refund status on the customer dashboard.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Vendor Features</strong>:
                    <ul>
                        <li>List and manage products.</li>
                        <li>Process orders and ship them via registered third-party courier services.</li>
                        <li>View sales, wallet balance, and order details.</li>
                        <li>Receive payments after deducting taxes, admin commissions, and delivery charges.</li>
                    </ul>
                </li>
                <li>
                    <strong>Admin Features</strong>:
                    <ul>
                        <li>Manage vendors, customers, and products.</li>
                        <li>Track sales, commissions, and vendor payments.</li>
                        <li>View detailed stats related to online payments, pending payments, and overall sales.</li>
                        <li>Handle return/refund requests and manage wallet transactions.</li>
                    </ul>
                </li>
                <li>
                    <strong>Return and Refund Process</strong>:
                    <ul>
                        <li>Customers can return products, with delivery charges borne by the vendor.</li>
                        <li>Refunded amounts are added to the customer’s Pluto Wallet for future purchases.</li>
                    </ul>
                </li>
                <li>
                    <strong>Payment and Commission System</strong>:
                    <ul>
                        <li>Admin earns a commission on each sale.</li>
                        <li>Vendor payments are processed after deducting taxes, admin commissions, and delivery
                            charges.</li>
                    </ul>
                </li>
            </ol>

            <h3>My Role and Contributions</h3>
            <ul>
                <li>Developed the <strong>admin panel</strong> using <strong>Laravel</strong> and
                    <strong>jQuery</strong> for managing vendors, customers, and sales.
                </li>
                <li>Built the <strong>frontend website</strong> using <strong>Nuxt 3</strong> for a fast and responsive
                    user experience.</li>
                <li>Integrated <strong>RESTful APIs</strong> to connect the frontend and backend seamlessly.</li>
                <li>Implemented the <strong>payment gateway</strong> for online payments and the <strong>Pluto
                        Wallet</strong> system.</li>
                <li>Designed and developed the <strong>return/refund process</strong> and <strong>order tracking
                        system</strong>.</li>
                <li>Optimized the platform for performance and scalability.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>Frontend</strong>: Nuxt 3, Vue.js</li>
                <li><strong>Backend</strong>: Laravel, RESTful APIs</li>
                <li><strong>Database</strong>: MySQL</li>
                <li><strong>Payment Integration</strong>: Online payment gateway, Pluto Wallet</li>
                <li><strong>Deployment</strong>: VPS, CPanel</li>
                <li><strong>Version Control</strong>: Git</li>
            </ul>

            <h3>Challenges and Solutions</h3>
            <ul>
                <li>
                    <strong>Challenge</strong>: Managing complex commission and payment calculations for vendors and
                    admin.<br>
                    <strong>Solution</strong>: Developed a robust algorithm to automatically calculate and distribute
                    payments after deducting taxes, commissions, and delivery charges.
                </li>
                <li>
                    <strong>Challenge</strong>: Ensuring a seamless return/refund process.<br>
                    <strong>Solution</strong>: Implemented a streamlined workflow for return requests, refunds, and
                    wallet updates.
                </li>
                <li>
                    <strong>Challenge</strong>: Integrating multiple payment options.<br>
                    <strong>Solution</strong>: Integrated a flexible payment system supporting cash on delivery, online
                    payments, and Pluto Wallet.
                </li>
            </ul>

            <h3>Impact</h3>
            <ul>
                <li>Delivered a scalable and user-friendly multivendor ecommerce platform.</li>
                <li>Enabled vendors to manage their sales and payments efficiently.</li>
                <li>Provided customers with a seamless shopping experience, including easy returns and refunds.</li>
                <li>Improved admin efficiency with detailed sales and payment tracking.</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>