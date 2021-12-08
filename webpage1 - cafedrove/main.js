AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});

var swiper = new Swiper(".swiper-container",
{
    // Optional parameters
    // direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    effect: "fade",
    loop: true,
    loopFillGroupWithBlank: true,

    autoplay: {
        delay: 6500,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});
    