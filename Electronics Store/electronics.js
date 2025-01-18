const swiper = new Swiper('.card-wrapper', {
    loop: true,
    slidesPerView: "4",
    grapCursor: true,
    centeredSlides: false,
    spaceBetween: 25,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});