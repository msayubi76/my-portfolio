<template>
    <section class="py-4 mt-4 contact-section">
        <div class="row">
            <div class="col-12">
                <div class="section-label">Contact</div>
                <h2 class="section-title">Let's Work Together</h2>
                <p class="section-subtitle mb-4">Open to freelance projects, full-time roles, and collaborations.</p>

                <div class="contact-grid">
                    <!-- Phone -->
                    <div class="contact-item">
                        <img src="/images/phone.svg" height="22px" class="contact-icon" />
                        <div>
                            <p class="mb-0 contact-label">Call me Now</p>
                            <h6 class="mb-0">+92 (343) 723-9678</h6>
                        </div>
                    </div>
                    <!-- LinkedIn -->
                    <div class="contact-item">
                        <img src="/images/linkedin.png" height="22px" />
                        <div>
                            <p class="mb-0 contact-label">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/msayubi76" target="_blank" class="contact-link">View Profile →</a>
                        </div>
                    </div>
                    <!-- Email -->
                    <div class="contact-item">
                        <img src="/images/email.svg" height="22px" class="contact-icon" />
                        <div>
                            <p class="mb-0 contact-label">Chat with Me</p>
                            <h6 class="mb-0">msayubi76@gmail.com</h6>
                        </div>
                    </div>
                    <!-- Stack Overflow -->
                    <div class="contact-item">
                        <img src="/images/stack-overflow.png" height="22px" />
                        <div>
                            <p class="mb-0 contact-label">Stack Overflow</p>
                            <a href="https://stackoverflow.com/users/10255904/msayubi76" target="_blank" class="contact-link">View Profile →</a>
                        </div>
                    </div>
                    <!-- Location -->
                    <div class="contact-item">
                        <img src="/images/location.svg" height="22px" class="contact-icon" />
                        <div>
                            <p class="mb-0 contact-label">Get Me Here</p>
                            <h6 class="mb-0">Islamabad, Pakistan</h6>
                        </div>
                    </div>
                    <!-- Facebook -->
                    <div class="contact-item">
                        <img src="/images/facebook.png" height="22px" />
                        <div>
                            <p class="mb-0 contact-label">Facebook</p>
                            <a href="https://www.facebook.com/msayubi76" target="_blank" class="contact-link">View Profile →</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 2rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
}

.contact-link {
    font-size: 0.875rem;
    font-weight: 600;
    color: #10B981;
}
.contact-link:hover { color: #059669; }

@media (max-width: 576px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}
</style>
