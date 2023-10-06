// Select all carousel containers
const carouselContainers = document.querySelectorAll(".carousel");

// Loop through each carousel container
carouselContainers.forEach((carouselContainer) => {
    const mainContainers = carouselContainer.querySelector(".mainContainers");
    const prevBtn = carouselContainer.querySelector(".prevBtn");
    const nextBtn = carouselContainer.querySelector(".nextBtn");

    let currentIndex = 0;

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % mainContainers.children.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + mainContainers.children.length) % mainContainers.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const itemWidth = mainContainers.clientWidth;
        const translateX = -currentIndex * itemWidth;
        mainContainers.style.transform = `translateX(${translateX}px)`;
    }

    // Initial update to set the correct starting position
    updateCarousel();
});