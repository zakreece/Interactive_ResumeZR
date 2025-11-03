// script.js: JS for interactivity.
// Includes toggles, animations, form handling, scrolling.
// Added dark mode, back-to-top, timeline visibility, filters, modals, parallax, preloader.

document.addEventListener('DOMContentLoaded', () => {
    // About toggle button.
    const toggleAboutBtn = document.getElementById('toggle-about');
    // About details div.
    const aboutDetails = document.getElementById('about-details');

    // Toggle event.
    toggleAboutBtn.addEventListener('click', () => {
        // Check hidden.
        if (aboutDetails.classList.contains('hidden')) {
            // Show details.
            aboutDetails.classList.remove('hidden');
            // Update text.
            toggleAboutBtn.textContent = 'Hide Details';
        } else {
            // Hide details.
            aboutDetails.classList.add('hidden');
            // Update text.
            toggleAboutBtn.textContent = 'Toggle More Details';
        }
    });

    // Animate skills button.
    const animateSkillsBtn = document.getElementById('animate-skills');
    // Progress bars.
    const progressBars = document.querySelectorAll('.progress');

    // Animate event.
    animateSkillsBtn.addEventListener('click', () => {
        // Loop bars.
        progressBars.forEach(bar => {
            // Get width.
            const targetWidth = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
            // Reset width.
            bar.style.width = '0';
            // Animate.
            setTimeout(() => {
                bar.style.width = `${targetWidth}%`;
            }, 100);
        });
    });

    // Contact form.
    const contactForm = document.getElementById('contact-form');
    // Form response.
    const formResponse = document.getElementById('form-response');

    // Submit event.
    contactForm.addEventListener('submit', (e) => {
        // Prevent default.
        e.preventDefault();
        // Show message.
        formResponse.textContent = 'Message sent successfully! (Simulated)';
        // Show response.
        formResponse.classList.remove('hidden');
        // Reset form.
        contactForm.reset();
        // Hide after delay.
        setTimeout(() => {
            formResponse.classList.add('hidden');
        }, 5000);
    });

    // Nav links.
    const navLinks = document.querySelectorAll('nav ul li a');

    // Smooth scroll.
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default.
            e.preventDefault();
            // Get target.
            const targetId = link.getAttribute('href').substring(1);
            // Select element.
            const targetElement = document.getElementById(targetId);
            // Header height.
            const headerHeight = document.getElementById('header').offsetHeight;
            // Position.
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            // Scroll to.
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Sections for observer.
    const sections = document.querySelectorAll('.section');
    // Intersection observer for fade-in.
    const sectionObserver = new IntersectionObserver(entries => {
        // Loop entries.
        entries.forEach(entry => {
            // Check intersecting.
            if (entry.isIntersecting) {
                // Add class.
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Observe sections.
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Timeline items for observer.
    const timelineItems = document.querySelectorAll('.timeline-item');
    // Intersection observer for timeline.
    const timelineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe timeline items.
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Dark mode button.
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    // Toggle event.
    darkModeToggle.addEventListener('click', () => {
        // Toggle class.
        document.body.classList.toggle('dark-mode');
        // Update text.
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });

    // Back-to-top button.
    const backToTopBtn = document.getElementById('back-to-top');
    // Scroll event for back-to-top.
    window.addEventListener('scroll', () => {
        // Show if scrolled.
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    // Click to top.
    backToTopBtn.addEventListener('click', () => {
        // Scroll to top.
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Filter buttons.
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    // Project items.
    const projectItems = document.querySelectorAll('.project-item');

    // Filter event.
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Get filter.
            const filter = btn.dataset.filter;
            // Loop items.
            projectItems.forEach(item => {
                // Show/hide.
                item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
            });
        });
    });

    // Modal open buttons.
    const openModalBtns = document.querySelectorAll('.open-modal');
    // Modals.
    const modals = document.querySelectorAll('.modal');
    // Close spans.
    const closeSpans = document.querySelectorAll('.close');

    // Open modal event.
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Get modal ID.
            const modalId = btn.dataset.modal;
            // Show modal.
            document.getElementById(modalId).classList.remove('hidden');
        });
    });

    // Close modal event.
    closeSpans.forEach(span => {
        span.addEventListener('click', () => {
            // Hide parent modal.
            span.closest('.modal').classList.add('hidden');
        });
    });

    // Close modal on outside click.
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // Parallax effect.
    window.addEventListener('scroll', () => {
        // Get scroll position.
        const scroll = window.pageYOffset;
        // Select parallax bgs.
        document.querySelectorAll('.parallax-bg').forEach(bg => {
            // Translate.
            bg.style.transform = `translateY(${scroll * 0.5}px)`;
        });
    });

    // Hide preloader on load.
    window.addEventListener('load', () => {
        // Hide preloader.
        document.getElementById('preloader').style.display = 'none';
    });
});