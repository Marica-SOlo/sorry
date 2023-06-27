new Swiper('.review-slider', {
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    keyboard:{
        enabled:true,
        onlyInViewport: true,
        pageUpdown: true,
    },

    loop: true,
    speed: 100,
    spaceBetween: 0,
});