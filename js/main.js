
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Counter animation
        const counters = document.querySelectorAll('.counter');
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText.replace(/\D/g, ''));
                const increment = target / 200;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target + (counter.innerText.includes('%') ? '%' : (counter.innerText.includes('+') ? '+' : ''));
                }
            });
        };

        // Intersection Observer for counter animation
        const statsSection = document.querySelector('.stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        if (statsSection) {
            observer.observe(statsSection);
        }


        // Mobile menu toggle (for future implementation)
        const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

        // Add loading animation to service cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards for animation
        document.querySelectorAll('.service-card, .portfolio-item, .testimonial').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });

