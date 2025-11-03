// Scroll reveal animations using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    // Create observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add .active class when element enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% visible
        rootMargin: '-50px' // small offset to delay animation
    });

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Helper function to add reveal classes with optional delay
    function addRevealToSection(selector, effect = 'fadeUp', childrenStagger = false) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add('reveal', `reveal-${effect}`);
            
            // Add stagger delay if requested
            if (childrenStagger) {
                const children = el.children;
                Array.from(children).forEach((child, i) => {
                    child.classList.add('reveal', `reveal-${effect}`, `delay-${i + 1}`);
                    observer.observe(child);
                });
            }
            
            observer.observe(el);
        });
    }

    // Add reveal effects to sections
    addRevealToSection('.section-tentang .tentang-teks', 'fadeUp');
    addRevealToSection('.section-tentang .tentang-visual', 'scale');
    
    // Layanan items with stagger
    addRevealToSection('.layanan-item', 'fadeUp', true);
    
    // Proyek items with stagger
    addRevealToSection('.proyek-item', 'fadeUp');
    
    // Team items with stagger
    addRevealToSection('.team-item', 'scale');
    
    // Headers and text blocks
    addRevealToSection('.headline', 'fadeUp');
    addRevealToSection('.subtitle', 'fadeUp');
    addRevealToSection('.deskripsi', 'fadeUp');

    // Special animations for floating team images
    document.querySelectorAll('.floating-name').forEach((el, i) => {
        el.classList.add('reveal', 'reveal-scale', `delay-${i + 1}`);
        observer.observe(el);
    });
});