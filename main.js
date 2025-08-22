// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksLi = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle navigation
        navLinks.classList.toggle('active');
        
        // Animate links
        navLinksLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it to console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Projects and blog post filtering functionality could be added here
    
    // Animation for skill bars
    const skillItems = document.querySelectorAll('.skill-level');
    
    const showSkills = () => {
        skillItems.forEach(skill => {
            const indicator = skill.querySelector('.level-indicator');
            indicator.style.width = '10';
            
            setTimeout(() => {
                indicator.style.width = indicator.getAttribute('style').split(':')[1];
            }, 300);
        });
    };
    
    // Initial animation
    showSkills();
    
    // Optional: image lazy loading
    const images = document.querySelectorAll('img');
    
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports 'loading' attribute
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for browsers that don't support 'loading' attribute
        // You could use a lazy loading library here
    }
});
