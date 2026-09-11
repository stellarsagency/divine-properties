// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        let msg = `Hi Divine Properties!%0AName: ${name}%0AEmail: ${email}`;
        if (phone) msg += `%0APhone: ${phone}`;
        if (service) msg += `%0AService: ${service}`;
        msg += `%0AMessage: ${message}`;
        
        window.open(`https://wa.me/923399113500?text=${msg}`, '_blank');
        contactForm.reset();
    });
}
