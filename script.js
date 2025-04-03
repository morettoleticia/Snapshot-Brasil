window.addEventListener('scroll', function() {
    const header = document.querySelector('header');

    // Change the threshold (e.g., 50 pixels) as needed
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        // Find the corresponding nav link using the section's id
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
        }
    });
}, {
    threshold: 0.6 // Adjust based on when you want the section to be considered "active"
});

// Observe each section
sections.forEach(section => observer.observe(section));
