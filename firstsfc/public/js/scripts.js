/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. TYPING ANIMATION (Homepage)
    // ========================================
    const typingElement = document.querySelector('.text-gradient');
    if (typingElement && typingElement.textContent.includes('Modern Website')) {
        const text = 'Modern Website';
        typingElement.textContent = '';
        typingElement.classList.add('typing-cursor');
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typingElement.classList.remove('typing-cursor');
                }, 500);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeText, 500);
    }

    // ========================================
    // 2. ACTIVE NAVIGATION HIGHLIGHTING
    // ========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.style.color = '#6366f1';
        }
    });

    // ========================================
    // 3. SCROLL ANIMATIONS (Fade-in on scroll)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to cards and sections
    const animateElements = document.querySelectorAll('.card, section > .container');
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in-element');
        el.style.transitionDelay = `${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    // ========================================
    // 4. BACK TO TOP BUTTON
    // ========================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // 5. DARK/LIGHT MODE TOGGLE
    // ========================================
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    themeToggle.className = 'theme-toggle-btn';
    themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'bi bi-moon-fill';
        } else {
            icon.className = 'bi bi-sun-fill';
        }
    }

    // ========================================
    // 6. CONTACT FORM VALIDATION
    // ========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const submitBtn = document.getElementById('submitButton');
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        // Enable submit button and add real-time validation
        submitBtn.classList.remove('disabled');
        
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(input);
                checkFormValidity();
            });
            
            input.addEventListener('blur', () => {
                validateInput(input);
            });
        });

        function validateInput(input) {
            const value = input.value.trim();
            let isValid = true;
            
            if (input.id === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
            } else if (input.id === 'phone') {
                const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
                isValid = phoneRegex.test(value);
            } else {
                isValid = value.length > 0;
            }
            
            if (isValid && value.length > 0) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else if (value.length > 0) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-valid', 'is-invalid');
            }
            
            return isValid && value.length > 0;
        }

        function checkFormValidity() {
            let allValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    allValid = false;
                }
            });
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            inputs.forEach(input => {
                if (!validateInput(input)) {
                    isFormValid = false;
                }
            });
            
            if (isFormValid) {
                // Show success message
                const successMsg = document.getElementById('submitSuccessMessage');
                if (successMsg) {
                    successMsg.classList.remove('d-none');
                    successMsg.innerHTML = '<div class="text-center mb-3 text-success"><i class="bi bi-check-circle-fill me-2"></i><span class="fw-bolder">Message sent successfully!</span></div>';
                }
                contactForm.reset();
                inputs.forEach(input => input.classList.remove('is-valid', 'is-invalid'));
            }
        });
    }

    // ========================================
    // 7. SKILL BARS ANIMATION (Resume page)
    // ========================================
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width;
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // ========================================
    // 8. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========================================
    // 9. NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.backdropFilter = 'none';
            }
        });
    }

    console.log('✨ Portfolio scripts loaded successfully!');
});