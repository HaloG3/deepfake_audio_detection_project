// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update active menu item
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Update active menu item on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// File Upload Handling
const uploadArea = document.querySelector('.upload-area');
const fileInput = document.getElementById('audio-upload');
const uploadButton = document.querySelector('.upload-button');
const resultDisplay = document.getElementById('result-display');

// Handle drag and drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--accent-color)';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = 'var(--secondary-color)';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--secondary-color)';
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

// Handle file selection through button
uploadButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

// Handle the uploaded file
function handleFile(file) {
    if (!file.type.startsWith('audio/')) {
        showResult('Please upload an audio file.', 'error');
        return;
    }

    // Show loading state
    showResult('Analyzing audio file...', 'loading');

    // Here you would typically send the file to your backend for analysis
    // For now, we'll simulate a response after 2 seconds
    setTimeout(() => {
        // Simulate analysis result
        const isFake = Math.random() > 0.5;
        const confidence = (Math.random() * 20 + 80).toFixed(1); // Random confidence between 80-100%
        
        if (isFake) {
            showResult(`This audio appears to be synthetic (${confidence}% confidence)`, 'fake');
        } else {
            showResult(`This audio appears to be authentic (${confidence}% confidence)`, 'real');
        }
    }, 2000);
}

// Display analysis result
function showResult(message, type) {
    resultDisplay.innerHTML = `
        <p class="result-message ${type}">
            ${message}
        </p>
    `;
}

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add background transition based on section
            if (entry.target.id === 'hero') {
                document.body.style.background = 'var(--gradient-1)';
            } else if (entry.target.id === 'features') {
                document.body.style.background = 'var(--gradient-2)';
            } else if (entry.target.id === 'demo') {
                document.body.style.background = 'var(--gradient-3)';
            }
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    observer.observe(card);
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - (scrolled * 0.003);
});

// Add animation classes to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 