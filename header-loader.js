// Unified header loader - replaces header on all pages with the standard format
document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    
    if (headerElement) {
        // Determine the correct path based on current location
        const isServicePage = window.location.pathname.includes('/services/');
        const homeLink = isServicePage ? '../index.html' : 'index.html';
        const logoImg = isServicePage ? '../assets/glasses.png' : '/assets/glasses.png';
        
        // Use the exact homepage header format
        headerElement.innerHTML = `
            <a href="${homeLink}" class="logo"><img src="${logoImg}" alt="IToldYouSo" /> <span><i>IT</i>oldYouSo Computing</span></a>
            <div class="phone-info">
                <a href="tel:07809590652" class="phone-number">07809590652</a>
                <a href="mailto:contactus@itoldyouso.tech" class="email-address">contactus@itoldyouso.tech</a>
                <p class="consultation-text">Free consultation</p>
            </div>
        `;
    }
});
