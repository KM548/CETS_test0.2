// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

// Toggle menu on hamburger click
if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('open');
        mainNav.classList.toggle('open');
    });
}

// ============================================
// CLOSE NAVIGATION WHEN A BUTTON IS CLICKED
// ============================================

const navButtons = document.querySelectorAll('.main-nav ul li button');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Close the navigation
        if (menuToggle) {
            menuToggle.classList.remove('open');
        }
        if (mainNav) {
            mainNav.classList.remove('open');
        }
    });
});

// ============================================
// SMOOTH SCROLL ANIMATION FOR NAV BUTTONS
// ============================================

navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Get the text inside the button
        const buttonText = this.textContent.trim().toLowerCase();
        
        // Map button text to section IDs
        const sectionMap = {
            'about cets': 'about',
            'org charts': 'org-charts',
            'announcements & updates': 'announcements',
            'records': 'records',
            'home': 'home',
            'contact': 'contact',
            'services': 'services'
        };
        
        // Find the target section ID
        const targetId = sectionMap[buttonText];
        
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault(); // Prevent default if it's a link
                
                // Smooth scroll to the target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }
    });
});

// ============================================
// OPTIONAL: CLOSE NAVIGATION WHEN CLICKING OUTSIDE
// ============================================

document.addEventListener('click', function(e) {
    if (mainNav && mainNav.classList.contains('open')) {
        // Check if click is outside the navigation and toggle button
        const isNavClick = mainNav.contains(e.target);
        const isToggleClick = menuToggle && menuToggle.contains(e.target);
        
        if (!isNavClick && !isToggleClick) {
            menuToggle.classList.remove('open');
            mainNav.classList.remove('open');
        }
    }
});

// ============================================
// OPTIONAL: CLOSE NAVIGATION ON ESCAPE KEY
// ============================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
        menuToggle.classList.remove('open');
        mainNav.classList.remove('open');
    }
});

const banner = document.querySelector('.banner');
const bannerVideo = banner?.querySelector('video');

if (banner && bannerVideo) {
    bannerVideo.addEventListener('playing', () => {
        banner.classList.add('video-playing');
    });

    const showFallback = () => banner.classList.remove('video-playing');
    bannerVideo.addEventListener('error', showFallback);
    bannerVideo.querySelector('source')?.addEventListener('error', showFallback);

    const playback = bannerVideo.play();
    if (playback) {
        playback.catch(showFallback);
    }
}