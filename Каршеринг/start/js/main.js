$(function(){
    $('.top__slaider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.reviews__slaider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1
    })

$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
})

});


