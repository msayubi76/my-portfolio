<script setup>
const images = ref([])

const config = useRuntimeConfig();

for (let index = 1; index < 6; index++) {

    images.value.push({
        src: `${config.app.baseURL}images/exchange-${index}.png`
    })

}
</script>

<template>
    <div class="container">
        <div class="project">
            <div class="row">
                <div class="col-md-6">
                    <h2>Crypto Exchange Platform</h2>
                    <p><strong>Live Link</strong>: <a href="https://www.bitnasdaq.com/" target="_blank">BitNasdaq</a>
                    </p>
                    <p><strong>Technologies Used</strong>: Nuxt.js, Ant Design (UI Framework), RESTful APIs, WebSocket,
                        CMS
                        Integration</p>

                    <h3>Project Overview</h3>
                    <p>
                        Built a high-performance <strong>Crypto Exchange Platform</strong> that enables users to trade,
                        convert,
                        and
                        manage cryptocurrencies seamlessly. The platform supports advanced trading features like
                        <strong>Spot
                            Trading</strong>, <strong>Margin Trading</strong>, and <strong>Futures Perpetual
                            Trading</strong>,
                        along
                        with secure P2P transactions and real-time market data integration. Designed with a focus on
                        scalability
                        and
                        user experience, the platform caters to both novice and experienced traders.
                    </p>

                </div>

                <div class="col-md-6">

                    <video src="/videos/crypto-exchange.mp4" controls width="100%"> </video>
                    <GalleryImages :images="images" />


                </div>
            </div>
            <h3>Key Features and Modules</h3>
            <ol>
                <li>
                    <strong>Advanced Trading Modules</strong>:
                    <ul>
                        <li><strong>Spot Trading</strong>: Buy and sell cryptocurrencies at current market prices.</li>
                        <li><strong>Margin Trading</strong>: Trade with leverage to amplify potential gains.</li>
                        <li><strong>Futures Perpetual Trading</strong>: Trade futures contracts with no expiration date.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>P2P Trading</strong>:
                    <ul>
                        <li>Peer-to-peer trading with escrow protection for secure transactions.</li>
                        <li>Dispute resolution system to handle conflicts between buyers and sellers.</li>
                    </ul>
                </li>
                <li>
                    <strong>Convert</strong>:
                    <ul>
                        <li>Instant conversion of one cryptocurrency to another.</li>
                        <li>Real-time exchange rates and low transaction fees.</li>
                    </ul>
                </li>
                <li>
                    <strong>Internal Transfers</strong>:
                    <ul>
                        <li>Seamless transfers between wallets:</li>
                        <ul>
                            <li>Spot-to-Margin</li>
                            <li>Spot-to-Future</li>
                            <li>Margin-to-Spot</li>
                            <li>Margin-to-Future</li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <strong>User Dashboard</strong>:
                    <ul>
                        <li>Manage personal information, transaction history, and trading activity.</li>
                        <li>View balances across different wallets (Spot, Margin, Future).</li>
                    </ul>
                </li>
                <li>
                    <strong>Financial Products</strong>:
                    <ul>
                        <li><strong>Locked Savings</strong>: Earn interest on locked crypto assets.</li>
                        <li><strong>Flexible Savings</strong>: Earn interest with flexible withdrawal options.</li>
                        <li><strong>Hybrid Savings</strong>: Combine locked and flexible savings for higher returns.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Help Center</strong>:
                    <ul>
                        <li>Integrated with a CMS to provide users with FAQs, guides, and support articles.</li>
                        <li>Dynamic content updates for real-time assistance.</li>
                    </ul>
                </li>
            </ol>

            <h3>My Role and Contributions</h3>
            <ul>
                <li>Led the development of the <strong>Advanced Trading Modules</strong> and <strong>P2P
                        Trading</strong>
                    features.</li>
                <li>Integrated <strong>WebSocket</strong> for real-time market data and trading updates.</li>
                <li>Designed and implemented the <strong>User Dashboard</strong> using <strong>Ant Design</strong> for a
                    clean and intuitive UI.</li>
                <li>Collaborated with the backend team to ensure secure and efficient API integrations.</li>
                <li>Help in the deployment of the platform on <strong>AWS</strong> for scalability and reliability.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>Frontend</strong>: Nuxt.js, Ant Design, Vue.js</li>
                <li><strong>Backend</strong>: RESTful APIs, WebSocket, .Net</li>
                <li><strong>Database</strong>: MySQL or MongoDB (whichever was used)</li>
                <li><strong>Deployment</strong>: AWS, VPS</li>
                <li><strong>Version Control</strong>: Git</li>
            </ul>

            <h3>Challenges and Solutions</h3>
            <ul>
                <li>
                    <strong>Challenge</strong>: Handling high-frequency trading data in real-time.<br>
                    <strong>Solution</strong>: Implemented WebSocket for live updates and optimized backend APIs for low
                    latency.
                </li>
                <li>
                    <strong>Challenge</strong>: Poor performance caused by unnecessary components and redundant Sass
                    files..<br>
                    <strong>Solution</strong>: Removed garbage components, optimized Sass files, and implemented best
                    practices like lazy loading and code splitting, significantly improving performance.
                </li>

            </ul>

            <h3>Impact</h3>
            <ul>
                <li>Delivered a robust and scalable crypto exchange platform.</li>
                <li>Enabled users to trade and manage cryptocurrencies with ease and confidence.</li>
                <li>Increased user engagement with advanced trading tools and financial products.</li>
            </ul>
        </div>
    </div>
</template>