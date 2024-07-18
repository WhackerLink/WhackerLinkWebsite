document.addEventListener('DOMContentLoaded', () => {
    console.log('WhackerLink website loaded');

    const images = document.querySelectorAll('.hero .hero-images img');
    let currentImageIndex = 0;
    const displayDuration = 5000;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    images[currentImageIndex].classList.add('active');
    setInterval(showNextImage, displayDuration);
});