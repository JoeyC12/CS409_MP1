// Global variables
let currentSlide = 0;
let slides = [];
let totalSlides = 0;

// Showcase carousel variables
let currentShowcaseSlide = 0;
let showcaseSlides = [];
let totalShowcaseSlides = 0;

// Swiss Hiking carousel variables
let currentSwissHikingSlide = 0;
let swissHikingSlides = [];
let totalSwissHikingSlides = 0;

// Soccer Memory carousel variables
let currentSoccerMemorySlide = 0;
let soccerMemorySlides = [];
let totalSoccerMemorySlides = 0;

// Astro Photography carousel variables
let currentAstroPhotographySlide = 0;
let astroPhotographySlides = [];
let totalAstroPhotographySlides = 0;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    setupNavigation();
    setupCarousel();
    setupShowcaseCarousel();
    setupSwissHikingCarousel();
    setupSoccerMemoryCarousel();
    setupAstroPhotographyCarousel();
    setupScrollAnimations();
    setupModals();
    setupGallery();
    console.log('Website initialized successfully!');
}

// Navigation functionality
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const positionIndicator = document.querySelector('.position-indicator');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - navbar.offsetHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        handleNavbarResize();
        updatePositionIndicator();
        updateActiveNavLink();
    });
    
    function handleNavbarResize() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            // 调整页面内容的顶部间距
            document.body.style.setProperty('--navbar-height', '60px');
        } else {
            navbar.classList.remove('scrolled');
            // 恢复原始间距
            document.body.style.setProperty('--navbar-height', '80px');
        }
    }
    
    function updatePositionIndicator() {
        const scrollPercent = (window.scrollY) / (document.body.scrollHeight - window.innerHeight);
        const indicatorWidth = scrollPercent * 100;
        positionIndicator.style.width = indicatorWidth + '%';
    }
    
    function updateActiveNavLink() {
        const currentSection = getCurrentSection();
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    function getCurrentSection() {
        const scrollPos = window.scrollY + navbar.offsetHeight + 50;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            if (scrollPos >= sections[i].offsetTop) {
                return sections[i].id;
            }
        }
        return sections[0].id;
    }
}

// Carousel functionality
function setupCarousel() {
    // Get slides after DOM is loaded
    slides = document.querySelectorAll('.carousel-item');
    totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    // Auto-play carousel
    setInterval(function() {
        nextSlide();
    }, 5000);
    
    // Show first slide
    showSlide(0);
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    changeSlide(1);
}

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (slides[n]) {
        slides[n].classList.add('active');
    }
    
    // Update indicators if they exist
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

// Showcase Carousel functionality
function setupShowcaseCarousel() {
    // Get showcase slides after DOM is loaded (only Guatemala carousel)
    showcaseSlides = document.querySelectorAll('#blog .showcase-item');
    totalShowcaseSlides = showcaseSlides.length;
    
    if (totalShowcaseSlides === 0) return;
    
    // Show first slide (no auto-play)
    showShowcaseSlide(0);
}

function changeShowcaseSlide(direction) {
    currentShowcaseSlide += direction;
    
    if (currentShowcaseSlide >= totalShowcaseSlides) {
        currentShowcaseSlide = 0;
    } else if (currentShowcaseSlide < 0) {
        currentShowcaseSlide = totalShowcaseSlides - 1;
    }
    
    showShowcaseSlide(currentShowcaseSlide);
}

function goToShowcaseSlide(n) {
    currentShowcaseSlide = n - 1;
    showShowcaseSlide(currentShowcaseSlide);
}

function nextShowcaseSlide() {
    changeShowcaseSlide(1);
}

function showShowcaseSlide(n) {
    showcaseSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (showcaseSlides[n]) {
        showcaseSlides[n].classList.add('active');
    }
    
    // Update showcase indicators if they exist (only Guatemala carousel)
    const indicators = document.querySelectorAll('#blog .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

// Swiss Hiking Carousel functionality
function setupSwissHikingCarousel() {
    // Get swiss hiking slides after DOM is loaded
    swissHikingSlides = document.querySelectorAll('#swiss-hiking .showcase-item');
    totalSwissHikingSlides = swissHikingSlides.length;
    
    if (totalSwissHikingSlides === 0) return;
    
    // Show first slide (no auto-play)
    showSwissHikingSlide(0);
}

function changeSwissHikingSlide(direction) {
    currentSwissHikingSlide += direction;
    
    if (currentSwissHikingSlide >= totalSwissHikingSlides) {
        currentSwissHikingSlide = 0;
    } else if (currentSwissHikingSlide < 0) {
        currentSwissHikingSlide = totalSwissHikingSlides - 1;
    }
    
    showSwissHikingSlide(currentSwissHikingSlide);
}

function goToSwissHikingSlide(n) {
    currentSwissHikingSlide = n - 1;
    showSwissHikingSlide(currentSwissHikingSlide);
}

function nextSwissHikingSlide() {
    changeSwissHikingSlide(1);
}

function showSwissHikingSlide(n) {
    swissHikingSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (swissHikingSlides[n]) {
        swissHikingSlides[n].classList.add('active');
    }
    
    // Update swiss hiking indicators if they exist
    const indicators = document.querySelectorAll('#swiss-hiking .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

// Soccer Memory Carousel functionality
function setupSoccerMemoryCarousel() {
    // Get soccer memory slides after DOM is loaded
    soccerMemorySlides = document.querySelectorAll('#soccer-memory .showcase-item');
    totalSoccerMemorySlides = soccerMemorySlides.length;
    
    if (totalSoccerMemorySlides === 0) return;
    
    // Show first slide (no auto-play)
    showSoccerMemorySlide(0);
}

function changeSoccerMemorySlide(direction) {
    currentSoccerMemorySlide += direction;
    
    if (currentSoccerMemorySlide >= totalSoccerMemorySlides) {
        currentSoccerMemorySlide = 0;
    } else if (currentSoccerMemorySlide < 0) {
        currentSoccerMemorySlide = totalSoccerMemorySlides - 1;
    }
    
    showSoccerMemorySlide(currentSoccerMemorySlide);
}

function goToSoccerMemorySlide(n) {
    currentSoccerMemorySlide = n - 1;
    showSoccerMemorySlide(currentSoccerMemorySlide);
}

function nextSoccerMemorySlide() {
    changeSoccerMemorySlide(1);
}

function showSoccerMemorySlide(n) {
    soccerMemorySlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (soccerMemorySlides[n]) {
        soccerMemorySlides[n].classList.add('active');
    }
    
    // Update soccer memory indicators if they exist
    const indicators = document.querySelectorAll('#soccer-memory .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

// Astro Photography Carousel functionality
function setupAstroPhotographyCarousel() {
    // Get astro photography slides after DOM is loaded
    astroPhotographySlides = document.querySelectorAll('#astro-photography .showcase-item');
    totalAstroPhotographySlides = astroPhotographySlides.length;
    
    if (totalAstroPhotographySlides === 0) return;
    
    // Show first slide (no auto-play)
    showAstroPhotographySlide(0);
}

function changeAstroPhotographySlide(direction) {
    currentAstroPhotographySlide += direction;
    
    if (currentAstroPhotographySlide >= totalAstroPhotographySlides) {
        currentAstroPhotographySlide = 0;
    } else if (currentAstroPhotographySlide < 0) {
        currentAstroPhotographySlide = totalAstroPhotographySlides - 1;
    }
    
    showAstroPhotographySlide(currentAstroPhotographySlide);
}

function goToAstroPhotographySlide(n) {
    currentAstroPhotographySlide = n - 1;
    showAstroPhotographySlide(currentAstroPhotographySlide);
}

function nextAstroPhotographySlide() {
    changeAstroPhotographySlide(1);
}

function showAstroPhotographySlide(n) {
    astroPhotographySlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (astroPhotographySlides[n]) {
        astroPhotographySlides[n].classList.add('active');
    }
    
    // Update astro photography indicators if they exist
    const indicators = document.querySelectorAll('#astro-photography .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.blog-post, .gallery-item, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Modal functionality
function setupModals() {
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            event.target.classList.remove('show');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Gallery functionality
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;
            
            // Create and show image modal
            showImageModal(imgSrc, imgAlt);
        });
    });
}

function showImageModal(src, alt) {
    // Create modal dynamically
    const modal = document.createElement('div');
    modal.className = 'modal image-modal';
    modal.innerHTML = `
        <div class="modal-content image-modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <img src="${src}" alt="${alt}" style="width: 100%; max-width: 90vw; max-height: 90vh; object-fit: contain;">
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    // Remove modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Any scroll-dependent operations can be added here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

