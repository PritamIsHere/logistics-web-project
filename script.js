const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    width: 600,
    centeredSlides: true,
    slidesPerView: 2,
    grabCursor: true,
    freeMode: false,
    loop: true,
    loopedSlides: 1,
    mousewheel: false,
    spaceBetween: 15,
    keyboard: {
        enabled: true
    },

    // Enabled autoplay mode
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },

    // // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullets: true,
    //     clickable: true

    // },

    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});