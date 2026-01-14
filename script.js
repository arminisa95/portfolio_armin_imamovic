// Smooth scroll behavior for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add simple fade-in effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
        }, 300);
    }

    // Add subtle hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(44, 62, 80, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Add dynamic year to footer if needed
    const currentYear = new Date().getFullYear();
    
    // Add copy to clipboard functionality for contact info
    const contactInfo = document.querySelectorAll('.contact-info span');
    contactInfo.forEach(info => {
        info.style.cursor = 'pointer';
        info.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });

    // Remove parallax effect for cleaner look

    // Add active section highlighting
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                // Add active class to current section
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add subtle skill tag animation
    const skillTags = document.querySelectorAll('.tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.05}s`;
        tag.style.animation = 'fadeInUp 0.3s ease forwards';
    });

    // Add CSS animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .tag {
            opacity: 0;
        }
        
        .timeline-item {
            opacity: 0;
            transform: translateX(-20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .timeline-item:nth-child(even) {
            transform: translateX(20px);
        }
        
        .timeline-item.animate {
            opacity: 1;
            transform: translateX(0);
        }
        
        .project-card {
            transition: all 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(44, 62, 80, 0.1);
        }
        
        .edu-item {
            transition: all 0.3s ease;
        }
        
        .edu-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(44, 62, 80, 0.1);
        }
        
        .language-item {
            transition: all 0.3s ease;
        }
        
        .language-item:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(44, 62, 80, 0.1);
        }
    `;
    document.head.appendChild(style);

    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});

// Add console welcome message
console.log('%c Welcome to Armin Imamovic\'s Portfolio ', 'background: #2c3e50; color: #ffffff; font-size: 14px; font-weight: 300; padding: 8px;');
console.log('%c Feel free to explore the work and connect ', 'background: #f8f9fa; color: #2c3e50; font-size: 12px; padding: 4px;');
