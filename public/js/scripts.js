document.addEventListener('DOMContentLoaded', () => {
    console.log('WhackerLink website loaded');

    const images = document.querySelectorAll('.hero .hero-images img');
    const dots = document.querySelectorAll('.nav-dots .dot');
    let currentImageIndex = 0;
    const displayDuration = 5000;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        dots[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
        dots[currentImageIndex].classList.add('active');
    }

    function showImage(index) {
        images[currentImageIndex].classList.remove('active');
        dots[currentImageIndex].classList.remove('active');
        currentImageIndex = index;
        images[currentImageIndex].classList.add('active');
        dots[currentImageIndex].classList.add('active');
    }

    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
    setInterval(showNextImage, displayDuration);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
        });
    });
});