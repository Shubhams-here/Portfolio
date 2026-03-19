// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        // In dark mode, clicking makes it light mode
        themeIcon.className = 'fas fa-sun'; 
    } else {
        // In light mode, clicking makes it dark mode
        themeIcon.className = 'fas fa-moon'; 
    }
}

// --- Mobile Menu Toggle ---
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = mobileBtn.querySelector('i');
    if (mobileMenu.classList.contains('open')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileBtn.querySelector('i').className = 'fas fa-bars';
    });
});

// --- Scroll Reveal & Skill Bars Animation ---
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        
        // Add active class to reveal elements
        entry.target.classList.add('active');
        
        // If it's the skills section, animate progress bars
        if (entry.target.classList.contains('skill-category')) {
            const bars = entry.target.querySelectorAll('.progress');
            bars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            });
        }
        
        // Stop observing once revealed
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active Link Highlighting
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current) && current !== '') {
            a.classList.add('active');
        }
    });
});
