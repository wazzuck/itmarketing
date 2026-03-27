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

// Chatbase integration for service pages
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="0bcLr7pcOs9kBCHuQuIWD";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();

// Function to open chatbot on service pages - assign to window immediately
window.openChatbot = function(e) {
    if (e) {
        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
    }
    
    // Wait a moment for chatbase to initialize if needed
    const openChat = () => {
        if (window.chatbase && typeof window.chatbase === 'function') {
            try {
                window.chatbase('setDisplayMode', 'fullscreen');
                window.chatbase('open');
                console.log('Chatbot opened successfully');
            } catch (err) {
                console.error('Error opening chatbot:', err);
            }
        } else {
            console.warn('Chatbase not available, retrying...');
            setTimeout(openChat, 100);
        }
    };
    
    openChat();
}


