// Unified header loader - only for service pages
// Homepage already has correct header HTML
function updateHeader() {
    const headerElement = document.querySelector('header');
    
    if (headerElement) {
        // Get full pathname
        const pathname = window.location.pathname;
        const isHomepage = pathname === '/' || 
                          pathname.endsWith('/index.html') || 
                          pathname.endsWith('/') ||
                          pathname === '' ||
                          pathname.includes('index.html');
        
        if (isHomepage) {
            // Skip on homepage - it has the correct HTML already
            return;
        }
        
        // This must be a service page
        // On service pages, detect device type by user agent
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
        
        const homeLink = '../index.html';
        const logoImg = '../assets/glasses.png';
        
        let headerHTML = `<a href="${homeLink}" class="logo"><img src="${logoImg}" alt="IToldYouSo" /> <span><i>IT</i>oldYouSo Computing</span></a>`;
        
        if (!isMobileDevice) {
            // Desktop: show contact details
            headerHTML += `
                <div class="phone-info">
                    <a href="tel:07809590652" class="phone-number">07809590652</a>
                    <a href="mailto:contactus@itoldyouso.tech" class="email-address">contactus@itoldyouso.tech</a>
                    <p class="consultation-text">Free consultation</p>
                </div>
            `;
        }
        
        headerElement.innerHTML = headerHTML;
    }
}

// Run once on load
document.addEventListener('DOMContentLoaded', updateHeader);



