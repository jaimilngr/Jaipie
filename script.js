const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0;
const slidesPerPage = 3;

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter -= slidesPerPage;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    const numSlides = slider.children.length;
    if (counter < numSlides - slidesPerPage) {
        counter += slidesPerPage;
        updateSlider();
    }
});

function updateSlider() {
    const slideWidth = 100 / slidesPerPage;
    const translation = -counter * slideWidth;
    slider.style.transform = `translateX(${translation}%)`;

    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index >= counter && index < counter + slidesPerPage) {
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
        }
    });
}

updateSlider();
