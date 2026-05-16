// Lucide Icons Initialization
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const offset = 80; // Header height
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const device = document.getElementById('device').value;
    const problem = document.getElementById('problem').value;
    
    // Create WhatsApp message
    const message = `Hallo Azzam Comp, saya ${name}%0A%0ANo. WhatsApp: ${phone}%0AJenis Perangkat: ${device}%0AKeluhan: ${problem}%0A%0ASaya ingin konsultasi seputar laptop dan komputer saya. Terima kasih!`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/6282383402137?text=${message}`, '_blank');
    
    // Reset form
    event.target.reset();
}

// Reveal Animations on Scroll
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Add reveal class to elements in HTML or target them here
document.querySelectorAll('section, .group, .bg-white.p-8, .p-10.rounded-\\[2\\.5rem\\]').forEach(el => {
    el.classList.add('reveal-init');
    revealObserver.observe(el);
});

// Add CSS for reveal animations dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal-init {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .reveal-init.active {
        opacity: 1;
        transform: translateY(0);
    }
    /* Staggered reveal for children */
    section.active .reveal-child {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Mobile Bottom Nav Active State
const navItems = document.querySelectorAll('.nav-item');
const sections = ['home', 'layanan', 'produk', 'harga', 'kontak'];

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
                current = section;
            }
        }
    });

    navItems.forEach(item => {
        const href = item.getAttribute('href').substring(1);
        if (href === current) {
            item.classList.add('text-primary');
            item.classList.remove('text-slate-400');
        } else {
            item.classList.remove('text-primary');
            item.classList.add('text-slate-400');
        }
    });
});