const container = document.querySelector(".application-container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const cards = document.querySelectorAll(".application-card");
const wrapper = document.querySelector(".slider-wrapper");

let currentIndex = 0;
const maxLength = cards.length;
let autoSlideInterval;

const updateSlider = () => {
    container.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

let autoSlide = ()  => {
    if (currentIndex < maxLength - 1) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }

    updateSlider();
}

const startAutoSlide = () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
}

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
}

wrapper.addEventListener("mouseenter", () => {
    stopAutoSlide();
})

wrapper.addEventListener("mouseleave", () => {
    startAutoSlide();
})

right.addEventListener("click", () => {
    if (currentIndex < maxLength - 1) {
        currentIndex += 1;
        updateSlider();
}})

left.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSlider();
    }
});