let currentSlide = 0;
let slides = [];
let totalSlides = 0;

let currentShowcaseSlide = 0;
let showcaseSlides = [];
let totalShowcaseSlides = 0;

let currentSwissHikingSlide = 0;
let swissHikingSlides = [];
let totalSwissHikingSlides = 0;

let currentSoccerMemorySlide = 0;
let soccerMemorySlides = [];
let totalSoccerMemorySlides = 0;

let currentAstroPhotographySlide = 0;
let astroPhotographySlides = [];
let totalAstroPhotographySlides = 0;

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

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

function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const positionIndicator = document.querySelector('.position-indicator');
    const sections = document.querySelectorAll('section');
    
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
    
    window.addEventListener('scroll', function() {
        handleNavbarResize();
        updatePositionIndicator();
        updateActiveNavLink();
    });
    
    function handleNavbarResize() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            document.body.style.setProperty('--navbar-height', '60px');
        } else {
            navbar.classList.remove('scrolled');
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

function setupCarousel() {
    slides = document.querySelectorAll('.carousel-item');
    totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    setInterval(function() {
        nextSlide();
    }, 5000);
    
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
    
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

function setupShowcaseCarousel() {
    showcaseSlides = document.querySelectorAll('#blog .showcase-item');
    totalShowcaseSlides = showcaseSlides.length;
    
    if (totalShowcaseSlides === 0) return;
    
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
    
    const indicators = document.querySelectorAll('#blog .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

function setupSwissHikingCarousel() {
    swissHikingSlides = document.querySelectorAll('#swiss-hiking .showcase-item');
    totalSwissHikingSlides = swissHikingSlides.length;
    
    if (totalSwissHikingSlides === 0) return;
    
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
    
    const indicators = document.querySelectorAll('#swiss-hiking .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

function setupSoccerMemoryCarousel() {
    soccerMemorySlides = document.querySelectorAll('#soccer-memory .showcase-item');
    totalSoccerMemorySlides = soccerMemorySlides.length;
    
    if (totalSoccerMemorySlides === 0) return;
    
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
    
    const indicators = document.querySelectorAll('#soccer-memory .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

function setupAstroPhotographyCarousel() {
    astroPhotographySlides = document.querySelectorAll('#astro-photography .showcase-item');
    totalAstroPhotographySlides = astroPhotographySlides.length;
    
    if (totalAstroPhotographySlides === 0) return;
    
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
    
    const indicators = document.querySelectorAll('#astro-photography .showcase-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === n) {
            indicator.classList.add('active');
        }
    });
}

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

function setupModals() {
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            event.target.classList.remove('show');
        }
    });
    
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

function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;
            
            showImageModal(imgSrc, imgAlt);
        });
    });
}

function showImageModal(src, alt) {
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
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

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

const optimizedScrollHandler = debounce(function() {
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

