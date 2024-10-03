document.addEventListener('DOMContentLoaded', () => {  
    const carouselInner = document.querySelector('.carousel-inner');  
    const carouselItems = document.querySelectorAll('.carousel-item');  
    const prevBtn = document.querySelector('.carousel-btn.prev');  
    const nextBtn = document.querySelector('.carousel-btn.next');  
  
    if (!carouselInner || !carouselItems.length || !prevBtn || !nextBtn) {  
        console.error('Carousel elements are missing!');  
        return;  
    }  
  
    let currentIndex = 0;  
    const validItems = Array.from(carouselItems).filter(item => {  
        const expiryDate = new Date(item.getAttribute('data-expiry'));  
        const today = new Date();  
        return expiryDate >= today;  
    });  
  
    function updateCarousel() {  
        if (!validItems.length) return; // No valid items, do nothing  
  
        const newTransformValue = `translateX(-${currentIndex * 100}%)`;  
        carouselInner.style.transform = newTransformValue;  
    }  
  
    function showNext() {  
        currentIndex = (currentIndex + 1) % validItems.length;  
        updateCarousel();  
    }  
  
    function showPrev() {  
        currentIndex = (currentIndex - 1 + validItems.length) % validItems.length;  
        updateCarousel();  
    }  
  
    setInterval(showNext, 3000);  
    prevBtn.addEventListener('click', showPrev);  
    nextBtn.addEventListener('click', showNext);  
  
    updateCarousel(); // Initial carousel setup  
});