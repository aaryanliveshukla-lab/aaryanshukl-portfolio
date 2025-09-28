document.addEventListener('DOMContentLoaded', () => {
    // Select all links in the navigation
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default anchor link behavior
            e.preventDefault();

            // Get the target element id from the link's href attribute (e.g., #about)
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll smoothly to the target section
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});