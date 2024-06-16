document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const body = document.body;

    // Dark Mode Toggle Functionality
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    body.classList.toggle('dark-mode', isDarkMode);

    if (isDarkMode) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }

    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        modeIcon.classList.toggle('fa-sun');
        modeIcon.classList.toggle('fa-moon');

        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Content toggling functionality for About section
    const navBoxes = document.querySelectorAll('.nav-box');
    const contentBoxes = document.querySelectorAll('.content-box');

    navBoxes.forEach(navBox => {
        navBox.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            navBoxes.forEach(box => box.classList.remove('active'));
            contentBoxes.forEach(box => box.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Set the default active content to "cs"
    activateContent("cs");

    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,  // Accounting for the fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});

function activateContent(targetId) {
    const navBoxes = document.querySelectorAll('.nav-box');
    const contentBoxes = document.querySelectorAll('.content-box');

    navBoxes.forEach(box => box.classList.remove('active'));
    contentBoxes.forEach(box => box.classList.remove('active'));

    const targetNavBox = document.querySelector(`.nav-box[data-target="${targetId}"]`);
    const targetContentBox = document.getElementById(targetId);

    if (targetNavBox && targetContentBox) {
        targetNavBox.classList.add('active');
        targetContentBox.classList.add('active');
    }
}

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,  // Accounting for the fixed navbar
                behavior: 'smooth'
            });
        }
    });
});



