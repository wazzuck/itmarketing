// Unified header loader - applies exact homepage header to all service pages
function updateHeader() {
    const headerElement = document.querySelector('header');
    
    if (headerElement) {
        // Detect if on service page
        const isServicePage = window.location.pathname.includes('/services/');
        
        if (!isServicePage) {
            // Skip - only run on service pages
            return;
        }
        
        // Apply exact same header as homepage to service pages
        headerElement.innerHTML = `
            <a href="../index.html" class="logo"><img src="/assets/glasses.png" alt="IToldYouSo" /> <span><i>IT</i>oldYouSo Computing</span></a>
            <div class="phone-info">
                <a href="tel:07809590652" class="phone-number">07809590652</a>
                <a href="mailto:contactus@itoldyouso.tech" class="email-address">contactus@itoldyouso.tech</a>
                <p class="consultation-text">Free consultation</p>
            </div>
        `;
    }
}

// Run once on load
document.addEventListener('DOMContentLoaded', updateHeader);



