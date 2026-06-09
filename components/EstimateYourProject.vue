<template>
    <section class="estimate-project py-4">
        <div class="row">
            <div class="col-md-10 col-12 mx-auto">
                <div class="estimate-banner">
                    <div>
                        <div class="estimate-label">Open to Work</div>
                        <h3 class="estimate-title">Have a project in mind?</h3>
                        <p class="estimate-text">Let's build something great together. Reach out and get a free estimate.</p>
                    </div>
                    <div class="estimate-cta">
                        <a href="mailto:msayubi76@gmail.com" class="btn-estimate">
                            Get a Free Estimate →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.estimate-banner {
    background: linear-gradient(135deg, #0A0F1E 0%, #0d1a2e 100%);
    border: 1px solid rgba(16, 185, 129, 0.25);
    border-radius: 16px;
    padding: 2.25rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    position: relative;
    overflow: hidden;
}

.estimate-banner::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%);
    pointer-events: none;
}

.estimate-label {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #10B981;
    margin-bottom: 0.5rem;
}

.estimate-title {
    font-size: 1.4rem;
    font-weight: 800;
    color: #F8FAFC;
    margin-bottom: 0.35rem;
    letter-spacing: -0.02em;
}

.estimate-text {
    font-size: 0.875rem;
    color: rgba(248, 250, 252, 0.6);
    margin: 0;
}

.btn-estimate {
    display: inline-block;
    background: #10B981;
    color: #FFFFFF !important;
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0.75rem 1.75rem;
    border-radius: 10px;
    white-space: nowrap;
    transition: all 200ms ease;
    text-decoration: none;
    letter-spacing: 0.01em;
}

.btn-estimate:hover {
    background: #059669;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
    color: #FFFFFF !important;
}

@media (max-width: 640px) {
    .estimate-banner {
        flex-direction: column;
        text-align: center;
        padding: 1.75rem 1.5rem;
    }
}
</style>
