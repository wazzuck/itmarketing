// Unified header loader - replaces header on all pages with the standard format
document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    
    if (headerElement) {
        // Determine the correct path based on current location
        const isServicePage = window.location.pathname.includes('/services/');
        const homeLink = isServicePage ? '../index.html' : 'index.html';
        const logoImg = isServicePage ? '../assets/glasses.png' : '/assets/glasses.png';
        
        // Use the exact homepage header format - logo only
        headerElement.innerHTML = `
            <a href="${homeLink}" class="logo"><img src="${logoImg}" alt="IToldYouSo" /> <span><i>IT</i>oldYouSo Computing</span></a>
        `;
    }
});
