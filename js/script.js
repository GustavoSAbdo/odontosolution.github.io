/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav__link');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SMOOTH SCROLLING ===============*/
const scrollToSection = (element) => {
    const targetSection = document.querySelector(element);
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            scrollToSection(targetId);
        }
    });
});

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active');
        }else{
            sectionsClass.classList.remove('active');
        }                                                    
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

// Hero animations
sr.reveal('.hero__text', {origin: 'left'});
sr.reveal('.hero__visual', {origin: 'right', delay: 600});

// Section animations
sr.reveal('.section__header', {delay: 200});
sr.reveal('.service__card', {interval: 200});
sr.reveal('.benefit__card', {interval: 150});
sr.reveal('.process__step', {interval: 300});
sr.reveal('.contact__info', {origin: 'left'});
sr.reveal('.contact__form', {origin: 'right', delay: 400});

/*=============== FLOATING ANIMATIONS ===============*/
const floatingElements = document.querySelectorAll('.hero__floating-card, .hero__circle');

floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
});

/*=============== COUNTER ANIMATION ===============*/
const animateCounters = () => {
    const counters = document.querySelectorAll('.hero__stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const number = parseInt(target.replace(/[^0-9]/g, ''));
        
        let current = 0;
        const increment = number / 100;
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (isPlus) displayValue = '+' + displayValue;
            if (isPercentage) displayValue += '%';
            if (target.includes('/')) displayValue = '24/7';
            
            counter.textContent = displayValue;
        }, 30);
    });
};

// Trigger counter animation when hero section is in view
const heroSection = document.querySelector('.hero');
let countersAnimated = false;

const observeHero = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            animateCounters();
            countersAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (heroSection) {
    observeHero.observe(heroSection);
}

/*=============== FORM HANDLING ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        const requiredFields = ['name', 'email', 'phone', 'clinic', 'service'];
        let isValid = true;
        
        requiredFields.forEach(field => {
            const input = this.querySelector(`[name="${field}"]`);
            if (!data[field] || data[field].trim() === '') {
                input.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                input.style.borderColor = '#e9ecef';
            }
        });
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInput = this.querySelector('[name="email"]');
        if (!emailRegex.test(data.email)) {
            emailInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset form
            this.reset();
            
            // In a real implementation, you would send the data to your server
            console.log('Form data:', data);
            
            // Example: Send to WhatsApp
            const whatsappMessage = `Olá! Vim através do site.
            
Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
Clínica: ${data.clinic}
Serviço: ${data.service}
Mensagem: ${data.message || 'Não informado'}`;
            
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Open WhatsApp after a short delay
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1000);
            
        } else {
            showNotification('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
        }
    });
}

/*=============== NOTIFICATION SYSTEM ===============*/
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification__close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification__close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background 0.2s ease;
    }
    
    .notification__close:hover {
        background: rgba(255,255,255,0.1);
    }
`;
document.head.appendChild(notificationStyles);

/*=============== PHONE MASK ===============*/
const phoneInput = document.querySelector('input[name="phone"]');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Limit to 11 digits (Brazilian phone number)
        if (value.length > 11) {
            value = value.slice(0, 11);
        }
        
        // Apply mask
        if (value.length >= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 7) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }
        
        e.target.value = value;
    });
}

/*=============== SCROLL TO TOP ===============*/
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show scroll to top button when scrolling down
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 500) {
        if (!scrollTopBtn) {
            const btn = document.createElement('button');
            btn.className = 'scroll-top';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.onclick = scrollToTop;
            
            btn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 100;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--gradient-primary);
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                transition: all 0.3s ease;
                animation: fadeInUp 0.3s ease;
            `;
            
            document.body.appendChild(btn);
        }
    } else {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.style.animation = 'fadeOutDown 0.3s ease';
            setTimeout(() => scrollTopBtn.remove(), 300);
        }
    }
});

// Add scroll animations
const fadeAnimationStyles = document.createElement('style');
fadeAnimationStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
    
    .scroll-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(fadeAnimationStyles);

/*=============== LAZY LOADING FOR IMAGES ===============*/
const lazyImages = document.querySelectorAll('img[data-src]');

if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

/*=============== PERFORMANCE OPTIMIZATIONS ===============*/
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(scrollActive, 10));
window.addEventListener('scroll', debounce(scrollHeader, 10));

/*=============== ACCESSIBILITY IMPROVEMENTS ===============*/
// Skip to main content link
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Add main ID to main element
const mainElement = document.querySelector('.main');
if (mainElement) {
    mainElement.id = 'main';
}

/*=============== ERROR HANDLING ===============*/
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

/*=============== INITIALIZATION ===============*/
document.addEventListener('DOMContentLoaded', function() {
    console.log('OdontoSolution landing page loaded successfully!');
    
    // Initialize any additional features here
    // Example: Analytics tracking, external integrations, etc.
});

// Add ScrollReveal fallback
if (typeof ScrollReveal === 'undefined') {
    console.warn('ScrollReveal library not loaded. Animations will be disabled.');
    // Create a fallback object
    window.ScrollReveal = () => ({
        reveal: () => {}
    });
}